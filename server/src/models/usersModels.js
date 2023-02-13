const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    pasword: {
        type: 'string',
        required: true
    },
    nameUser: {
        type: 'string',
        required: true
    },
    photo: {
        type: 'string',
        required: true
    },
    email: {
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