#/!bin/bash

cd src/client
node scripts/build.js
cd ../..
mv ./src/client/build ./src/server/public