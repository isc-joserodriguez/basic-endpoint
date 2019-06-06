let _users;

const getAll = (req,res)=>{
    _users.find({})
    .then(users=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:users
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
    const user = req.body;
    _users.create(user)
    //data informacion que viene de mongo
    .then(data=>{
        console.log(data);
        res.status(200);
        res.json({
            code:200,msg:"Saved!!!",
            detail:data
        });
    }).catch(error => {
        console.log(error);
        res.status(400);
        res.json({
            code: 400,
            msg: "No se pudo insertar!!!",
            detail:error
        });
    });
}

const deleteUser = (req,res) =>{
    const {id}= req.params;
    _users.remove({_id:id})
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
    _users.find({_id:id})
    .then(user=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Éxito",
            detail:user
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
    const user=req.body;
    _users.update({_id:id},{$set:{
        email:user.email,
        password: user.password,
        name: {
            firstName: user.name.firstName,
            LastName: user.name.LastName
        }
    }}).then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se actualizó el registro!!!",
            detail:data
        });
    }).catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"No se actualizó el registro!!!",
            detail:error
        });
    });
}

const sendMail = (req,res)=>{
    const id= req.params.id;
    _users.find({_id:id})
    .then(user=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se envió email!!",
            detail:user
        });
        console.log(user);
        var msg={
            to: user[0].email,
            from: 'cagureyesgo@ittepic.edu.mx',
            subject: 'Invitacion a '+user[0].name.firstName + " "+user[0].name.LastName,
            html: template_invitations(user[0].name.firstName + " "+user[0].name.LastName, user[0]._id),
        }
        sgMail.send(msg).catch(error=>{console.log(error)});
    }).catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error!!!",
            detail:error
        });
    });
}

module.exports = (User)=>{
    _users = User;
    return ({
        getAll, create, deleteUser, getById, update, sendMail
    });
}

function template_invitations(name, id){
    return "<div style='background-color: rgba(63, 60, 56, 0.192); width: 400px;'><h2 style='text-align: center'>Hola "+name+"</h2><br><p style='text-align:center'><img src='https://chart.googleapis.com/chart?cht=qr&chl="+id+"&chs=180x180&choe=UTF-8&chld=L|2' alt='ID Alumno'></p><br><p style='text-align:center'>Eres invitado al evento</p></div><br>"
}