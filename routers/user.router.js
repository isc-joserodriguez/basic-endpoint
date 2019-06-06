const userRouter = require('express').Router();

module.exports = (wagner) => {
    const userCtrl = wagner.invoke((User)=>
    require('../controllers/user.controller')(User));
    //Definir endPoints
    //CRUD PRODUCTOS
    userRouter.get("/",(req,res)=>{
        userCtrl.getAll(req,res);
    });

    userRouter.get("/:id",(req,res)=>{
        userCtrl.getById(req,res);
    });

    userRouter.delete("/:id", (req,res)=>{
        userCtrl.deleteUser(req,res);
    });
    
    userRouter.put("/:id",(req,res)=>{
        userCtrl.update(req,res);
    });

    userRouter.post("/",(req,res)=>{
        userCtrl.create(req,res);
    });

    userRouter.get("/email/:id",(req,res)=>{
        userCtrl.sendMail(req,res);
    });
    
    return userRouter;
}