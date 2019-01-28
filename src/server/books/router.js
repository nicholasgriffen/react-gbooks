const { Router } = require('express')

const { search } = require('../lib/googleBooksClient')

const router = Router()

router.use('/', async (req, res, next) => {
    const books = await search().catch(e => {
        return next(e)
    })
    res.status = 200
    res.json(books)
})

module.exports = router