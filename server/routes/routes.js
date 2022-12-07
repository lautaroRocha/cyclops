const router = require('express').Router();
const productsRouter = require('./products/products')
const adminRouter = require('./admin/admin')
const cartRouter = require('./cart/cart')
const ordersRouter = require('./orders/order')
const archiveRouter = require('./archivedOrder/archivedOrder')

router.use('/products', productsRouter)
router.use('/cart', cartRouter)
router.use('/admin', adminRouter)
router.use('/admin-orders', ordersRouter)
router.use('/admin-archive', archiveRouter)


module.exports = router;
