const router = require('express').Router()
const controller = require('./controller')

router.post('/auth', controller.doLogin)

module.exports = router