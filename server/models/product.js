const mongoose = require('mongoose');

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
},{collection : 'products'})

module.exports = mongoose.model('Product', productSchema)