const mongoose = require('mongoose');

//esquema usuarios
const userSchema = new mongoose.Schema({
    _id:{type:Number},
    nombre:{type:String},
    edad:{type:Number}
});

// modelo usuarios
const personaModel = mongoose.model('Persona',userSchema,'personas');


module.exports= personaModel;