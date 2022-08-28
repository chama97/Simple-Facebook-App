const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id,
        name: {
            firstname: this.name.firstname,
            lastname: this.name.lastname,
        },
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        password: this.password,
        contact: this.contact
     },'process.env.JWTPRIVATEKEY' , {
		expiresIn: "7d",
	});
	return token;
};

module.exports = mongoose.model('user', userSchema) 