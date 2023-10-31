const { MongoClient } = require("mongodb");
const { convert } = require("html-to-text");
const { uri,contest,leaderBoard } = require("./env");


const dbName = "DAppWorld";
const client = new MongoClient(uri);
const database = client.db(dbName);



async function getAllUserIds(contest) {
    let res = await database
        .collection("UserDetails")
        .aggregate([
            {
                $project: {
                    username: 1,
                    userid: 1,
                },
            },
        ])
        .toArray();

    let allUserIds = {};

    for (username of leaderBoard[contest - 1]) {
        let res = await database
            .collection("UserDetails")
            .aggregate([
                {
                    $match: {
                        username: username,
                    },
                },
                {
                    $project: {
                        username: 1,
                        userid: 1,
                    },
                },
            ])
            .toArray();
        if (res.length != 1) {
            throw Error("Unexpected response : res = ", res);
        }
        res = res[0];
        console.log(res);

        allUserIds[res.username] = res.userid;
    }

    console.log('allUserIds : ' , allUserIds)

    return allUserIds;
}

async function giveMedal(userid, medal) {
    console.log('userid : ', userid , ' ------ medal : ', medal)
    await database.collection("UserStats").updateOne(
        {
            userid: userid,
        },
        {
            $push: {
                "badges.permanent": medal,
            },
        }
    );
}

async function allotPermenantBadges(userIds) {
    for (let contestNum = contest; contestNum <= contest; contestNum++) {
        let currentLeaderboard = leaderBoard[contestNum - 1];
        for (let i in currentLeaderboard) {
            let userid = userIds[currentLeaderboard[i]];
            let medal;
            if (i < 3) {
                medal = `/images/badges/medal-contest-${contestNum}-rank-${
                    parseInt(i) + 1
                }.png`;
            } else {
                medal = `/images/badges/medal-contest-${contestNum}-top10.png`;
            }
            await giveMedal(userid, medal);
        }
    }
}

async function main() {
    try {
        let userIds = await getAllUserIds(contest);
        await allotPermenantBadges(userIds, contest);
    } catch (error) {
        console.log(error);
    }

    process.exit(0);
}

main();
