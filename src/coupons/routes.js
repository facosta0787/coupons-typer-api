const router = require('express').Router()
const controller = require('./controller')
const withAuth = require('../middlewares/withAuth')

router.all('/coupons', withAuth)
router.get('/coupons', controller.list)
router.get('/coupons/:couponId', controller.list)
router.post('/coupons', controller.create)

router.get('/coupons/:user/count', withAuth, controller.listDigitedCurrentDay)
router.get('/coupons/customer/:nuip', withAuth, controller.listByNuip)

module.exports = router
