const router = require('express').Router()
const merchantRoutes = require('./merchantRoutes')

router.use('/merchantChat', merchantRoutes)

module.exports = router