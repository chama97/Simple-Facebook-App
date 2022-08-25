const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { 
        firstname: { type: String,
                     required: true,
        },
        lastname:  { type: String,
                     required: true
        }
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('user', userSchema) 