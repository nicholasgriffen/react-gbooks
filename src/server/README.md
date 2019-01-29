## Server

### BEFORE DEVELOPMENT OR TESTING
  * `cd react-gbooks/src/server && npm install` to install dependencies 
  * `cd react-gbooks/src/server && npm start` to run the server on localhost:3030:  
    `Server says: Server proxies requests to the Google Books API`  
  or 
  * update the `"proxy"` field in `package.json` to point to some other server  
  If you haven't yet, check out the [client]('../client/README.md')

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3030](http://localhost:3030) to view public/index.html.

### `npm test`  
alias for `mocha --watch`
