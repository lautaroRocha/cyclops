require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('Connection established')})
    .catch(error => handleError(error));

