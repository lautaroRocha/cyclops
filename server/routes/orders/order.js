const ordersRouter = require('express').Router();
const handleOrders = require('../../controllers/order')

ordersRouter.get('/', handleOrders.getOrders)

ordersRouter.patch('/:id', handleOrders.setOrderState)

ordersRouter.delete('/:id', handleOrders.deleteOrder)


module.exports = ordersRouter;