const cartRouter = require('express').Router();
const handleOrders = require('../../controllers/order')

cartRouter.post('/', handleOrders.sendOrder)

module.exports = cartRouter;