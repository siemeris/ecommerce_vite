const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const productsSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    modelo: {
        type: 'string',
        required: true
    },
    marca: {
        type: 'string',
        required: true
    },
    precio: {
        type: Number,
        required: true

    },
    descripcion: {
        type: "string",
        required: true
    },
    caracteristicas: {
        type: 'string',
        required: true
    },
    
})

const Products = mongoose.model('products', productsSchema)

module.exports = Products;