const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const router = require('./routes/routes');
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
require('./config/mongoConnection');


app.use(express.json())  
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)
app.use('/upload', express.static('upload'));
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );


