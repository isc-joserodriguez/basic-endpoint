const brandRouter = require('express').Router();

module.exports = (wagner) => {
    const brandCtrl = wagner.invoke((Brand)=>
    require('../controllers/brand.controller')(Brand));
    //Definir endPoints
    //CRUD BRAND
    brandRouter.get("/",(req,res)=>{
        brandCtrl.getAll(req,res);
    });

    brandRouter.get("/:id",(req,res)=>{
        brandCtrl.getById(req,res);
    });

    brandRouter.delete("/:id", (req,res)=>{
        brandCtrl.deleteBrand(req,res);
    });

    brandRouter.put("/:id",(req,res)=>{
       brandCtrl.update(req,res);
    });
    
    brandRouter.post("/",(req,res)=>{
        brandCtrl.create(req,res);
    });
    
    return brandRouter;
}