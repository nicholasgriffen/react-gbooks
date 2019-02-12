#/!bin/bash

# remove existing public dir
rm -rf ./src/server/public

# move into client dir
cd src/client
# run modified create-react-app build script
node scripts/build.js

# move back to project top level
cd ../..

# move build Client app to Server public dir
mv ./src/client/build ./src/server/public 

# copy index.css and favicon to Server public dir
cp ./src/client/public/index.css ./src/server/public/.
cp ./src/client/public/favicon.ico ./src/server/public/.
