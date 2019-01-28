const express = require('express')
const path = require('path')

const booksRouter = require('./books/router')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use('/books', booksRouter)
app.listen(() => console.log(`listening on ${PORT}`))

module.exports = app