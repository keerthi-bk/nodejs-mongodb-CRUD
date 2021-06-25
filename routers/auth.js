const router=require('express').Router();
const User=require('../model/User');
const jwt=require('jsonwebtoken')
const { registerValidation,loginValidation } = require('./validation');
router.post('/register',async (req,res)=>{
      // Validating the user
    const {error}=registerValidation(req.body);
        if(error)  return res.status(400).send(error.details[0].message);
       // Checking if user alredy exist
       const emailExist=await User.findOne({email:req.body.email});
       if(emailExist)
          return res.status(400).send('Email Alredy Exists')
     const user=new User({
        name:req.body.name,
      email:req.body.email,
     password:req.body.password,
        Phone_Number:req.body.phone_number
});
    try {
        const savedUser=await user.save();
        res.send(savedUser+"Saved...")
    } catch (error) {
        res.status(400).send(error)
    }
});
router.get("/all",function(req,res){
    User.find(function(err,users){
        if(err){
            console.log("Cannot get the data");
        }else{
            //Or we can console log
             res.send(JSON.stringify(users));
            }
        })
    })
router.post('/login',async function(req,res){
    //validationg login 
    const {error}=loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // if user  in database
    const emailExist=await User.findOne({email:req.body.email});
    if(!emailExist)
       return res.status(400).send('User Doest not exits / user or password is wrong')
       //Password is correct
       if(emailExist.password ===req.body.password){
           //Create a Token
           const token=jwt.sign({_id:emailExist._id},"jhglkmkjhg");
           res.header('auth-token',token).send(token);
       }else{
       res.status(400).send("Invalid Password")
       }
})
module.exports=router