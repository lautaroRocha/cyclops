const mongoose = require('mongoose');
const Joi = require('joi')
const validateRequest = require('../middleware/validateRequest')

const archivedOrderSchema = new mongoose.Schema({
    client : {
        type : String
    }, 
    finished : {
        type : Boolean,
        required : false,
        default: true
    },
    order : {
        type : Array,
        required: true
    },
    date: {
        type : Object,
        required: false,
        default: new Date().toJSON()
    }
})

const archivedOrder = mongoose.model('archivedOrders', archivedOrderSchema);

const ValidateOrder = (req, res, next) => {
    const schema = Joi.object({
        client: Joi.string().min(4).max(100).required()
            .messages({
          'string.empty': "Ingresa el Nombre de cliente",
          'string.min': "El nombre debe tener un mínimo de 4 letras",
          'any.required': "Ingresa el Nombre de cliente"
        }),
        order: Joi.array().min(1).required()
            .messages({
                'array.empty': "No hay productos en su orden",
                'array.min': "No hay productos en su orden",
                'any.required': "No hay productos en su orden"
            })        
    });
    validateRequest(req, res, next, schema);
}

module.exports = {archivedOrder, ValidateOrder}