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
    brand: {
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
        type: [String],
        required: true
    },
    photos: {
      type: [String],
      required: true
    },
    status: {
      type: 'string',
      default: 'active'
    }
})

const Products = mongoose.model('products', productsSchema)

module.exports = Products;