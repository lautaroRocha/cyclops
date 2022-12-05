const ordersRouter = require('express').Router();
const authenticateToken = require("../../middleware/authenticateToken")
const handleOrders = require('../../controllers/order')

ordersRouter.get('/', handleOrders.getOrders)

ordersRouter.patch('/:id', authenticateToken, handleOrders.setOrderState)

ordersRouter.delete('/:id', authenticateToken, handleOrders.deleteOrder)


module.exports = ordersRouter;