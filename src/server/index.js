const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.listen(() => console.log(`listening on ${PORT}`))

module.exports = app