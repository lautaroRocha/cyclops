const cartRouter = require('express').Router();
const handleOrders = require('../../controllers/order')
const { ValidateOrder } = require('../../models/order')

cartRouter.post('/', ValidateOrder, handleOrders.sendOrder)

module.exports = cartRouter;