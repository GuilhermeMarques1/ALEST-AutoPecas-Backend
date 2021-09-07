'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const productRoutes = require('./routes/productRouter'); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', productRoutes.routes); 

app.listen(config.port, () => console.log('App is listening on url http://locahost:'+ config.port));  
