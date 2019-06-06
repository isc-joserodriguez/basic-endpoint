let _persona;

const getAll = (req,res)=>{
    _persona.find({})
    .then(persona=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:persona
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
    const Persona = req.body;
    
    _persona.find({}).sort({_id:-1}).limit(1).then(id=>{
        id=(id=={})?0:(id[0].id);
        Persona._id=parseInt(id)+1;
        _persona.create(Persona)
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
    })
}

const deletePersona = (req,res) =>{
    const {id}= req.params;
    _persona.remove({_id:id})
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
    _persona.find({_id:id})
    .then(Persona=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Éxito",
            detail:Persona
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
    const Persona=req.body;
    _persona.update({_id:id},{$set:{Persona:Persona.Persona}})
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

module.exports = (Persona)=>{
    _persona = Persona;
    return ({
        getAll, create, deletePersona, getById,update
    });
}