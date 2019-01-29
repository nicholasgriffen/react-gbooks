# react-gbooks
Thin Express Server and companion React App to find and display Google Books 
# Deployed: 
[Heroku](https://nggbsearch.herokuapp.com/) 
# Deployment strategy 
* Build the Client:   
`cd react-gbooks/src/client/bookshelf && npm build`  
* Copy the build to the server public folder:  
`cp -r ./build ../../server/public`
* Copy the server to a new directory - the multiple package json's disrupt heroku build process:   
`cp -r ../../server`
* Create heroku app to host server  
`heroku create nggbsearch`    
* Push to heroku remote   
`git push heroku master`
