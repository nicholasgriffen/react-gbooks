#/!bin/bash

read -p 'Enter component name' name
mkdir ./$name
echo 'Touching' $name'.js'
touch ./$name/$name.js
echo 'Touching' $name'.css'
touch ./$name/$name.css
echo 'Touching' $name'.test.js'
touch ./$name/$name.test.js