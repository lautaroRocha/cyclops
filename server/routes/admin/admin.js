const handleProducts = require('../../controllers/products')
const adminRouter = require('express').Router(); 

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/', handleProducts.addProduct)

adminRouter.patch('/:id/:attr/:value', handleProducts.updateOneProduct)

adminRouter.delete('/:id', handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', handleProducts.deleteMultipleProducts)


module.exports = adminRouter;