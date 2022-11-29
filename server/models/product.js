const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        unique : true,
        required: true
    },
    img:{
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: false,
        default: 1
    }
})

const Product = mongoose.model('products', productSchema)

const ValidateProduct = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100).required()
            .messages({
          'string.empty': "Ingresa el Título",
          'string.min': "El título debe ser mayor a 5 caracteres",
          'any.required': "Ingresa el Título"
        }),
        // img: Joi.string().required()
        //     .messages({
        //   'string.empty': "Sube una imagen",
        // }),
        price: Joi.number().min(1000).required()
            .messages({
            'number.empty': "Ingresa el precio",
            'number.min': "El precio debe ser mayor a 3 caracteres",
            'any.required': "Ingresa el precio"
          }),
        type: Joi.string().min(5).max(100).required()
            .messages({
              'string.empty': "Ingresa el tipo de producto",
              'string.min': "El tipo de producto debe ser mayor a 5 caracteres",
              'any.required': "Ingresa el el tipo de producto"
            }),
    });
    validateRequest(req, res, next, schema);
}


module.exports = {Product, ValidateProduct};