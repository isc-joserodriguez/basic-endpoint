const express = require('express');
const wagner = require('wagner-core');
const bodyParser = require('body-parser');

//ponga disponible models
require('./models/models')(wagner);


//Importan producRouter
const productRouter = require('./routers/product.router')(wagner);
const userRouter = require('./routers/user.router')(wagner);
const brandRouter = require('./routers/brand.router')(wagner);
const personaRouter = require('./routers/persona.router')(wagner);

//confi servidor express
let app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//le pondra la ruta localhost:3002
app.use("/products",productRouter);
app.use("/users",userRouter);
app.use("/brands",brandRouter);
app.use("/persona",personaRouter);


module.exports = app;