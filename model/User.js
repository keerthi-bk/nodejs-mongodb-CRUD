const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        require:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        
        require:true,
    },
    Phone_Number:{
        type:Number
    }
}
)
module.exports=mongoose.model('User',userSchema)