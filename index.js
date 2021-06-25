const express=require('express');
const app=express();
const mongoose=require('mongoose');
const authRoute=require('./routers/auth');
const Update=require("./routers/Update")
//connect toDB
mongoose.connect(
    "mongodb+srv://deved:rhino11@cluster0.l0yi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     },function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Connected to  monogoDB!");
        }
})
app.use(express.json())
//Route Middleware
app.use("/api/update",Update);
app.use('/api/user',authRoute);
// Run server in port number 3000
app.listen(3000,()=>{
    console.log("Server is Up and Running...");
})