#/!bin/bash

name=$1
echo 'Making directory' src/components/$name 
mkdir -p src/components/$name
echo 'Touching' $name'.js'
touch src/components/$name/$name.js
echo 'Touching' $name'.css'
touch src/components/$name/$name.css
echo 'Touching' $name'.test.js'
touch src/components/$name/$name.test.js