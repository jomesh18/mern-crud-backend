const mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    name: { type: String, required: [true, "Please enter product name"] },
    price: { type: Number, required: true, default: 0 },
    qty: { type: Number, required: true, default: 0 }
}, { timestamps: true })

let Product = mongoose.model('Product', productSchema);

module.exports = Product;