const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const userSchema = new Schema({
    nombre:{
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    contraceña: {
        type: 'string',
        required: true
    },
    nombreUsuario: {
        type: 'string',
        required: true
    },
    foto: {
        type: 'string',
        required: true
    },
    correo: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        default: 'active'
    }
});

const User = mongoose.model('user', userSchema)

module.exports = User;