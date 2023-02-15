const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const productsSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    model: {
        type: 'string',
        required: true
    },
    branc: {
        type: 'string',
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    description: {
        type: "string",
        required: true
    },
    characteristics: {
        type: 'string',
        required: true
    },
    
})

const Products = mongoose.model('products', productsSchema)

module.exports = Products;