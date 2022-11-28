const mongoose = require('mongoose');

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
        type : String,
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
},{collection : 'orders'})

module.exports = mongoose.model('Order', orderSchema);


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