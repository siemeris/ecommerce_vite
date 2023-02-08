const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const pagosSchema = new Schema({
    numero: {
        type: 'string',
        required: true
    },
    nombre: {
        type: 'string',
        required: true
    },
    nip: {
        type: int,
        required: true
    },
    idUser: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        default: 'active'
    }

})

const Pagos = mongoose.model('pagos', pagosSchema)

module.exports = Pagos;