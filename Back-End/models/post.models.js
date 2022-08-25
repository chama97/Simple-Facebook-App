const mongoose = require('mongoose')
const User = require('../models/user.models')

const postSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    }     
    ,
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
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