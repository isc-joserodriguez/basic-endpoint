let _brand;

const getAll = (req,res)=>{
    _brand.find({})
    .then(brands=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:brands
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
    const brand = req.body;
    _brand.create(brand)
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

const deleteBrand = (req,res) =>{
    const {id}= req.params;
    _brand.remove({_id:id})
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
    _brand.find({_id:id})
    .then(brand=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Éxito",
            detail:brand
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
    const brand=req.body;
    _brand.update({_id:id},{$set:{brand:brand.brand}})
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

module.exports = (Brand)=>{
    _brand = Brand;
    return ({
        getAll, create, deleteBrand, getById,update
    });
}