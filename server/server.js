const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const router = require('./routes/routes');
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/Cyclops')
    .then(()=>{console.log('Connection established')})
    .catch(error => handleError(error));

app.use(express.json())  
app.use(express.urlencoded())
app.use(cors())


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );

app.use(router)

