
const mongoose = require('mongoose');

//esquema
//definir el esquema que vamos a manejar
const productSchema = new mongoose.Schema({
    code: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    }
    });
    
//modelo Productos
const productModel = mongoose.model('Product', productSchema,'products');
    




//exportar
module.exports= productModel;