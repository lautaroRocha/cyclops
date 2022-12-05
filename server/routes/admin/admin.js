const handleProducts = require('../../controllers/products')
const adminRouter = require('express').Router(); 
const { ValidateProduct } = require('../../models/product')
const authenticateToken = require("../../middleware/authenticateToken")
const ValidateRequest = require('../../middleware/validateRequest')
const uploadMulter = require("../../config/multerConfig");
const handleUsers = require("../../controllers/admin")

adminRouter.get('/', handleProducts.getAllProducts)

adminRouter.post('/',[authenticateToken, uploadMulter.single('img'), ValidateProduct], handleProducts.addProduct)

adminRouter.post('/register', authenticateToken, handleUsers.addAdmin)

adminRouter.post('/login', handleUsers.logInUser )

adminRouter.patch('/:id/:attr/:value', [authenticateToken, ValidateRequest], handleProducts.updateOneProduct)

adminRouter.delete('/:id', authenticateToken, handleProducts.deleteOneProduct)

adminRouter.delete('/:attr/:value', authenticateToken, handleProducts.deleteMultipleProducts)


module.exports = adminRouter;