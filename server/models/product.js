const mongoose = require('mongoose');
const Joi = require('joi')

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
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


const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100).required()
            .messages({
          'string.empty': "Ingresa el Título",
          'string.min': "El título debe ser mayor a 5 caracteres",
          'any.required': "Ingresa el Título"
        }),
        // img: Joi.string().min(5).max(100).required()
        //     .messages({
        //   'string.empty': "Sube una imagen",
        //   'string.min': "El Apellido debe ser mayor a 5 caracteres",
        //   'any.required': "Sube una imagen"
        // }),
        price: Joi.string().email().min(3).max(100).required()
            .messages({
            'string.empty': "Ingresa el precio",
            'string.min': "El precio debe ser mayor a 3 caracteres",
            'any.required': "Ingresa el precio"
          }),
        type: Joi.string().min(5).max(100).required()
            .messages({
              'string.empty': "Ingresa el tipo de producto",
              'string.min': "El tipo de producto debe ser mayor a 5 caracteres",
              'any.required': "Ingresa el el tipo de producto"
            }),
    });
}

const Product = mongoose.model('products', productSchema)

module.exports = {Product, ValidateUser};