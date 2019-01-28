const { Router } = require('express')
const router = Router()

router.use('/', (req, res, next) => {
    res.sendStatus(200)
})

module.exports = router