const { MongoClient } = require("mongodb");
const { uri } = require("./env");

const dbName = "DAppWorld";
const client = new MongoClient(uri);
const database = client.db(dbName);
const fs = require("fs");
const path = require("path");
const papa = require("papaparse");

function exchange(a, b) {
    if (a.display_rating > b.display_rating) return -1;
}

async function emptyDynamicMedals() {
    console.log("[Medals Emptied]")
    await database.collection("UserStats").updateMany(
        {},
        {
            $set: {
                "badges.dynamic": [],
            },
        }
    );
}

async function assignMedal(userid, group) {
        console.log('[MEDAL] userid : ' , userid , ' ---- group : ' , group)
    await database.collection("UserStats").updateOne(
        {
            userid: userid,
        },
        {
            $set: {
                "badges.dynamic": [`/images/badges/medal-${group}percent.png`],
            },
        }
    );
}

async function updateMedals(results) {
    await emptyDynamicMedals();

    results.sort(exchange);
    let total = results.length;
    let top5count = Math.floor((total * 5) / 100);
    let top25count = Math.floor((total * 25) / 100);

    for (let i = 0; i < top5count; i++) {
        await assignMedal(results[i].handle, "top5");
    }

    for (let i = top5count; i < top25count; i++) {
        await assignMedal(results[i].handle, "top25");
    }
}

async function main() {
    const filePath = path.join(
        __dirname,
        "..",
        "data",
        "DW",
        "all_players.csv"
    );

    let results = await new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", async (err, data) => {
            if (err) {
                console.error("Error reading the file:", err.message);
                return;
            }

            let results = papa.parse(data, {
                header: true,
                dynamicTyping: true,
            }).data;

            resolve(results);
        });
    });

    // console.log(results)

    for (userRating of results) {
        console.log('userid : ' , userRating.handle , ' ---- rating : ' , userRating.display_rating)
        await database.collection("UserStats").updateOne(
            {
                userid: userRating.handle,
            },
            {
                $set: {
                    rating: userRating.display_rating,
                },
            }
        );
    }

    await updateMedals(results);

    process.exit(0);
}

main();
