const { MongoClient } = require("mongodb");

const { uri, ContestTimestamps } = require("./env");
const dbName = "DAppWorld";
const client = new MongoClient(uri);
const database = client.db(dbName);
const fs = require("fs");
const path = require("path");

// function exchange(a, b) {
//     if (a.totalScore > b.totalScore) {
//         return -1;
//     }
// }

async function main() {
    try {
        for (
            let i = Object.keys(ContestTimestamps).length - 1;
            i < Object.keys(ContestTimestamps).length;
            i++
        ) {
            let standings = await database
                .collection(`contest${i + 1}`)
                .aggregate([
                    {
                        $match: {
                            duringContest: true,
                        },
                    },
                    {
                        $sort: {
                            totalScore: -1,
                            totalGas: 1,
                        },
                    },
                    {
                        $project: {
                            userid: 1,
                            totalScore: 1,
                            totalGas: 1,
                        },
                    },
                ])
                .toArray();

            // standings.sort(exchange);

            let l = 0,
                r;
            let len = standings.length;

            while (l < len) {
                let startRank, endRank;
                r = l;
                while (
                    standings[r].totalScore == standings[l].totalScore &&
                    standings[r].totalGas == standings[l].totalGas
                ) {
                    if (standings[r].userid == null) {
                        console.log("null userid found");
                    }
                    r++;
                    if (r == len) break;
                }
                startRank = l + 1;
                endRank = r;

                while (l < r) {
                    standings[l].final = [
                        standings[l].userid,
                        startRank,
                        endRank,
                    ];
                    standings[l] = standings[l].final;
                    l++;
                }
            }

            let fileData = {
                name: `Smart Contract Contest - ${i + 1}`,
                url: "something",
                time_seconds: ContestTimestamps[i + 1].start,
                standings: standings,
            };

            const jsonData = JSON.stringify(fileData, null, 4);
            const filePath = path.join(
                __dirname,
                "..",
                "cache",
                "DW",
                `${i}.json`
            );
            fs.writeFileSync(filePath, jsonData);
            console.log("written : ", filePath);
        }
    } catch (error) {
        console.log(error);
    }
    process.exit(0);
}

main();
