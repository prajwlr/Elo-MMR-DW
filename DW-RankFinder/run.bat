@REM In env file: 
@REM 1. change contest timestamps file before running this
@REM 2. Add top 10 users to leaderboard array
@REM 3. Change Database to test or prod

node ./run.js > ./logs/run.txt
call :waitForExit

cd ../multi-skill/
cargo run --release --bin rate mmr-fast DW
call :waitForExit

cd ../DW-RankFinder/
node ./updateRatings.js > ./logs/updateRatings.txt
call :waitForExit

node ./top10medals.js > ./logs/top10medals.txt
call :waitForExit

node ./preparecsvs.js > ./logs/preparecsvs.txt
call :waitForExit

start .\FireAlarm.mp3