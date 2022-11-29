const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Cyclops')
    .then(()=>{console.log('Connection established')})
    .catch(error => handleError(error));

