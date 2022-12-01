const handleProducts = require('../../controllers/products')
const adminRouter = require('express').Router(); 
const { ValidateProduct } = require('../../models/product')
const ValidateRequest = require('../../middleware/validateRequest')
const uploadMulter = require("../../config/multerConfig");
const handleUsers = require("../../controllers/admin")

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/',[uploadMulter.single('img'), ValidateProduct], handleProducts.addProduct)

adminRouter.post('/register', handleUsers.addAdmin)

adminRouter.post('/login', handleUsers.logInUser )

adminRouter.patch('/:id/:attr/:value', ValidateRequest, handleProducts.updateOneProduct)

adminRouter.delete('/:id', handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', handleProducts.deleteMultipleProducts)


module.exports = adminRouter;