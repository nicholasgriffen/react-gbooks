# Overview 

## Live: 
[Heroku](https://nggbsearch.herokuapp.com/)

## Issues   
Track issues on github [here](https://github.com/nicholasgriffen/react-gbooks/issues)  

## Quick Start 
1. `git clone git@github.com:nicholasgriffen/react-gbooks`  
2. `npm install`  
3. Define ./src/server/.env   
    See [example](./support/env.example)    
        Required:    
            API_ENDPOINT  
            API_KEY ([how to get one](https://developers.google.com/books/docs/v1/using))  
        Optional:  
            PORT  
4. `npm run client-build`    
5. `npm start`  

## Deploy   
`heroku create my-app`    
`git push heroku master`  
See `"scripts": "client-build"` and `"scripts": "heroku-postbuild"` in package.json for implementation details.  
See [Heroku](https://devcenter.heroku.com/articles/creating-apps) for heroku CLI usage.  

## src/client
  React application bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)  
  See [./src/client/contributing.md](./src/client/contributing.md) for more specific overview of file structure
### Functionality
  Designed to be served from src/server/public  
  Presents and renders a search bar   
  Sends user input as request to src/server/books/    
  Receives data as response from src/server/books      
  Presents search results   
### Highest Priority Issue 
[#39](https://github.com/nicholasgriffen/react-gbooks/issues/39). Client was created with, then ejected from create-react-app
 
### Relevant scripts from package.json:  
#### `npm run client-build`  
  transform src/client and copy it to the src/server/public folder  
  see [build.sh](./support/env.example) for implementation details  
#### `npm run client-test`  
  run jest in watch mode
  
## src/server
  Node.js web server written with [Express](https://expressjs.com/)  
  See [./src/server/contributing.md](./src/server/contributing.md) for more specific overview of file structure
### Functionality
  Serves public/index.html   
  Should, but does not have to, serve the results of `npm run client-build` from ./public/           
  Initiates a search of Google Books API in response to an http GET to /books with optional query param, `/books?search=param`  
### Highest Priority Issue 
[#31](https://github.com/nicholasgriffen/react-gbooks/issues/31). Server tests fail without a valid API key

### Relevant scripts from package.json
#### `npm start` 
  start the server and listen for requests on a port  
  print the port to the console
#### `npm run server-test`
  run mocha in watch mode
  

