const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const productoSchema = new Schema({
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
        type: int,
        required: true

    },
    descripcion: {
        type: "text",
        required: true
    },
    caracteristicas: {
        type: 'string',
        required: true
    },
    
})

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto;