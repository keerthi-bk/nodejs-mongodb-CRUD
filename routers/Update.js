const router=require('express').Router();
const User=require("../model/User")
const verify=require('./verifyToken')

router.post("/",verify,(req,res)=>{
    if(req.body.phone_number){
    User.updateOne({email:req.body.email},{$set:{Phone_Number:req.body.phone_number}},function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Succefully Updated phone_number")
        }
    })
    }else if(req.body.name){
        User.updateOne({email:req.body.email},{$set:{name:req.body.name}},function(err){
            if(err){
                res.send(err);
            }else{
                res.send("Succefully Updated the name")
            }
        })
    }else{
            res.send("Nothing to Update")
    }
})
module.exports=router;