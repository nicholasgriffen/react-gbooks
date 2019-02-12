# Contributing 

## React Components 
React components are located in src/components. A component should be stored in a directory with the same name as the component, under the naming convention `Component/Component.js`

## Configuring webpack 
Start in [./config/webpack.config.js](./config/webpack.config.js)

## Configuring build 
Start in [./scripts/build.js](./scripts/build.js)  
### Note 
This build script is an artifact of create-react-app

## Tests
Tests are located in a folder with the relevant component, such as [Book.test.js](src/components/Book/Book.test.js)  
Tests are run with Jest
