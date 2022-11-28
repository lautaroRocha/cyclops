const router = require('express').Router();
const productsRouter = require('./products/products')
const adminRouter = require('./admin/admin')
const cartRouter = require('./cart/cart')
const ordersRouter = require('./orders/order')

router.use('/products', productsRouter)
router.use('/cart', cartRouter)

router.use('/admin', adminRouter)
router.use('/admin-orders', ordersRouter)


module.exports = router;
