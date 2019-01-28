const express = require('express')
const path = require('path')

const booksRouter = require('./books/router')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use('/books', booksRouter)

app.use((req, res, next, err) => {
    res.status = err.status ? err.status : 500
    
    if (process.env.NODE_ENV !== 'production') {
        res.send(err)
    } else {
        const safeError = new Error("Something's gone awry, please visit your local library for now")
        res.send(safeError)
    }
    
}) 

app.listen(() => console.log(`listening on ${PORT}`))

module.exports = app