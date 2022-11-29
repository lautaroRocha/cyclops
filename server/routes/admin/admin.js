const handleProducts = require('../../controllers/products')
const adminRouter = require('express').Router(); 
const { ValidateProduct } = require('../../models/product')
const ValidateRequest = require('../../middleware/validateRequest')

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/', ValidateProduct, handleProducts.addProduct)

adminRouter.patch('/:id/:attr/:value', ValidateRequest, handleProducts.updateOneProduct)

adminRouter.delete('/:id', handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', handleProducts.deleteMultipleProducts)


module.exports = adminRouter;