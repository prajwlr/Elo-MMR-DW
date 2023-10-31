const uri =
    "mongodb+srv://dapp-world-main:YprxG2UuSQ4pNuvl@aws-mumbai.oontz3x.mongodb.net/";
// "mongodb+srv://test-dp-3:test-dp_123@cluster0.6d8xzse.mongodb.net/";

const leaderBoard = [
    //1
    [
        "Rajatlko13",
        "Bappa044",
        "Ericselvig",
        "Sauravrao637",
        "rushikesh865",
        "Varun57D",
    ],
    //2
    [
        "Rajatlko13",
        "Zakariae743",
        "Sahil",
        "Bappa044",
        "HarpreetSingh",
        "yonadav",
        "A_ash",
    ],
    //3
    [
        "rushikesh865",
        "Ericselvig",
        "krishsangwan100",
        "Sumith",
        "FlameKaiser",
        "Bappa044",
        "sauravrao637",
        "Madan14d",
        "Kanak",
        "seraviz",
        "deep",
    ],
    //4
    [
        "sauravrao637",
        "Ericselvig",
        "bepossible",
        "rushikesh865",
        "arpit3210",
        "Madan14d",
        "Varun57D",
        "Chuck9I0",
        "anishagarwal20",
        "adityakaklij",
    ],
    //5
    [
        "sauravrao637",
        "JagadeshDI2",
        "Ericselvig",
        "TheWpingMonk",
        "Raisul236",
        "harry2855",
        "laveshsaluja",
        "Bappa044",
        "Nitin6II",
        "dastijr",
    ],
    //6
    [
        "bepossible",
        "sauravrao637",
        "CSE_31_SAYAK21D",
        "Raisul236",
        "Tim",
        "nhatducmo",
        "Nitin6II",
        "RishabhI9I",
        "Kumarjoshi",
        "Vasvi476",
    ],
    //7
    [
        "bepossible",
        "10xdev",
        "Vishal4",
        "PARASi27",
        "0xhappy",
        "kamuik16",
        "Dhananjayi88",
        "Kshitijd36",
        "sufiyanmemon",
        "Ethan360",
    ],
    //8
    [
        "bepossible",
        "CSE_31_SAYAK21D",
        "NitinSinha",
        "sauravrao637",
        "deepu002",
        "AbhishekII8",
        "ktshacx",
        "MrLittle",
        "Ericselvig",
        "ashishmeena20",
        "Paras9DD",
        "muditI60",
    ],
];

const contest = leaderBoard.length;

const ContestTimestamps = {
    1: {
        start: 1682015400000,
        end: 1682274601000,
        problem: "gavin-and-magic-array-Gdjr",
        "gavin-and-magic-array-Gdjr": "A",
        "gavin-and-bookstore-SggR": "B",
        "dapp-worlds-got-talent-Psot": "C",
    },
    2: {
        start: 1684434601000,
        end: 1684693801000,
        problem: "dinesh-and-gambling-Aiqd",
        "dinesh-and-gambling-Aiqd": "A",
        "scholarship-credit-system-easy-LJgj": "B",
        "scholarship-credit-system-hard-LFgj": "C",
    },
    3: {
        start: 1688668201000,
        end: 1688927401000,
        problem: "jared-and-maths-askj",
        "jared-and-maths-askj": "A",
        "shipment-service-easy": "B",
        "shipment-service-hard": "C",
    },
    4: {
        start: 1692426601000,
        end: 1692599400000,
        problem: "lcm-problem",
        "lcm-problem": "A",
        "dao-membership-easy": "B",
        "dao-membership-hard": "C",
    },
    5: {
        start: 1694241000000, // 9th sep 12:00 PM IST
        end: 1694413800000, // 11th sep 12:00 PM IST
        title: "QuillAudits InternQuest",
        problem: "triangle-inequality",
        "triangle-inequality": "A",
        "team-wallet-easy": "B",
        "team-wallet-hard": "C",
    },
    6: {
        start: 1695450600000, // 23th sep 12:00 PM IST
        end: 1695623400000, // 25th sep 12:00 PM IST
        starttimeString: "23th Sep 12:00 PM IST",
        title: "PurplePay InternQuest",
        problem: "pythagoras-theorem",
        "pythagoras-theorem": "A",
        "bus-ticket-1": "B",
        "blockchain-gaming-ecosystem": "C",
    },
    7: {
        start: 1697265000000, // 14th oct 12:00 PM IST
        end: 1697437800000, // 16th oct 12:00 PM IST
        starttimeString: "14th Oct 12:00 PM IST",
        title: "Push Protocol InternQuest",
        problem: "fibonacci-sequence",
        "fibonacci-sequence": "A",
        "solah-parchi-thap-easy": "B",
        "solah-parchi-thap-hard": "C",
    },
    8: {
        start: 1698474600000, // 28th oct 12:00 PM IST
        end: 1698647400000, // 30th oct 12:00 PM IST
        starttimeString: "28th Oct 12:00 PM IST",
        title: "dapps InternQuest",
        problem: "palindrome-checker-hard",
        "palindrome-checker-hard": "A",
        "lottery-problem": "B",
        "lottery-problem-2": "C",
    },
};
console.log("Running for contest : ", contest);

module.exports = {
    uri,
    contest,
    ContestTimestamps,
    leaderBoard,
};
