const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const orderSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    }, 
    lastName : {
        type : String,
        required : true
    }, 
    delivery : {
        type : String,
        required : true
    },
    cardID : {
        type : Number,
        required : true,
    }, 
    cardEXP : {
        type : String,
        required : true
    },
    order : {
        type : Array,
        required: true
    },
    status : {
        type : String,
        required: false,
        default : 'Pending',
    }
})

const Order = mongoose.model('orders', orderSchema);


const ValidateOrder = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().min(4).max(100).required()
            .messages({
          'string.empty': "Ingresa el Nombre de cliente",
          'string.min': "El nombre debe tener un mínimo de 4 letras",
          'any.required': "Ingresa el Nombre de cliente"
        }),
        lastName: Joi.string().min(4).required()
            .messages({
            'string.empty': "Ingresa el Apellido de cliente",
            'string.min': "El apellido debe tener un mínimo de 4 letras",
            'any.required': "Ingresa el Apellido de cliente"
          }),
        delivery: Joi.string().required()
            .messages({
              'string.empty': "Elija un método de envío",
              'any.required': "Elija un método de envío"
            }),
        cardID: Joi.number().min(1000000000000).required()
            .messages({
                'number.empty': "Ingresa el número de tarjeta",
                'number.min': "El número de tarjeta se compone de 13 números",
                'any.required': "Ingresa el número de tarjeta"
            }),
        cardEXP: Joi.string().min(5).required()
            .messages({
                'string.empty': "Ingresa el número de vencimiento de la tarjeta",
                'string.min': "El número de vencimiento se escribe 'MM/AA' ",
                'any.required': "Ingresa el número de vencimiento de la tarjeta"
            }),
        order: Joi.array().min(1).required()
            .messages({
                'array.empty': "No hay productos en su orden",
                'array.min': "No hay productos en su orden",
                'any.required': "No hay productos en su orden"
            }),
            
    });
    validateRequest(req, res, next, schema);
}

module.exports = {Order, ValidateOrder}


// {
//     "firstName": "Testing",
//     "lastName": "Order",
//     "delivery" : "home delivery",
//     "cardEXP": 0426,
//     "cardID" : 5465121657984,    
//     "order": [
//          {
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria"    
//          },{
//         "_id" : 215649876551,
//         "price" : 10000000,
//         "quantity": 2,
//         "title": "ASdas",
//         "type": "indumentaria" 
//         }]
//     }