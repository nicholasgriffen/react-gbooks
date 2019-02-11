require('dotenv').config()

const express = require('express')
const path = require('path')

const booksRouter = require('./books/router')

const app = express()
const PORT = process.env.PORT || 3030

app.use(express.static(path.join(__dirname, 'public')))

app.use('/books', booksRouter)


app.use((err, req, res, next) => {
    res.status = err.status ? err.status : 500

    const safeError = new Error("Something's gone awry, please visit your local library for now")

    res.send(safeError)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))

module.exports = app