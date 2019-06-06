const status = require('http-status');

let _product;

const getAll = (req,res)=>{
    _product.find({})
    .then(products=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:products
        });
    }).catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"Error!!!",
                detail:error
            });
    });
};

const create = (req,res)=>{
    const product = req.body;
    _product.create(product)
    //data informacion que viene de mongo
    .then(data=>{
        res.status(200);
        res.json({
            code:200,msg:"Saved!!!",
            detail:data
        });
    }).catch(error => {
        res.status(400);
        res.json({
            code: 400,
            msg: "No se pudo insertar!!!",
            detail:error
        });
    });
}

const deleteProduct = (req,res) =>{
    const {id}= req.params;
    _product.remove({_id:id})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se eliminó!!!",
            detail:data
        });
    }).catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"No se eliminó!!!",
            detail:error
        });
    });
}

const getById = (req,res)=>{
    const id= req.params.id;
    _product.find({_id:id})
    .then(product=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Éxito",
            detail:product
        });
    }).catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error!!!",
            detail:error
        });
    });
}

const update = (req,res)=>{
    const {id}= req.params;
    const product=req.body;
    _product.update({_id:id},{$set:{code:product.code,name:product.name,price:product.price}})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            mgs:"Exito",
            detail:data
        });
    }).catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error!!!",
            detail:error
        });
    });
}

module.exports = (Product)=>{
    _product = Product;
    return ({
        getAll, create, deleteProduct, getById,update
    });
}