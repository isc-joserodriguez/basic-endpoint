const mongoose = require('mongoose');

//esquema usuarios
const brandSchema = new mongoose.Schema({
    brand:{ type : String }
  
});

// modelo usuarios
const brandModel = mongoose.model('Brand',brandSchema,'brand');


module.exports= brandModel;