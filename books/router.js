const { Router } = require('express')

const { search } = require('../lib/googleBooksClient')

const router = Router()

router.use('/', async (req, res, next) => {
    let term = req.query.search ? req.query.search : null
    const books = await search(term).catch(e => {
        return next(e)
    })
    res.status = 200
    res.json(books)
})

module.exports = router