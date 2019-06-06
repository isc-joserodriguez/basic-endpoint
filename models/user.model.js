const mongoose = require('mongoose');

//esquema usuarios
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        }
    }
});

// modelo usuarios
const userModel = mongoose.model('Usuario',userSchema,'usuarios');


module.exports= userModel;