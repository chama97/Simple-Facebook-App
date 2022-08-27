const mongoose = require('mongoose')
const User = require('../models/user.models')

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }     
    ,
    date: {
        type: String,
        required: true
    },
    
    time: {
        type: String,
        required: true,
        timestamps: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('post', postSchema) 