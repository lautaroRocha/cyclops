const handleProducts = require('../../controllers/products')
const adminRouter = require('express').Router(); 
const { ValidateProduct } = require('../../models/product')
const ValidateRequest = require('../../middleware/validateRequest')
const uploadMulter = require("../../config/multerConfig");

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/',[uploadMulter.single('image'), ValidateProduct], handleProducts.addProduct)

adminRouter.patch('/:id/:attr/:value', ValidateRequest, handleProducts.updateOneProduct)

adminRouter.delete('/:id', handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', handleProducts.deleteMultipleProducts)


module.exports = adminRouter;