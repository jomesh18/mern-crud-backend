const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
let productRoute = require('./routes/product.route.js');

const app = express();
app.use(express.json());

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => console.log('Connection failed'));