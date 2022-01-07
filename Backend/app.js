const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const port = process.env.PORT || 8000;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://balram:anju@cluster0.8rd1h.mongodb.net/tribeuserbase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},()=>{
    console.log("server connected");
});

//const authRoute = require("./routes/auth");

app.use(express());

//app.use("/",authRoute)

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("user", UserSchema);

app.post("/register" ,(req, res)=>{
    const {name,email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send();
        }
    })
    const user = new User({name, email, password})
    user.save(err=>{
        if(err){
            res.send({message:"user already registered"});
        }
        else{
            res.send({message:"successfully registered"});
        }
    })
})

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})

//mongodb://localhost:27017/triberegistration