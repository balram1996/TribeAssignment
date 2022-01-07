const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting the database
mongoose.connect(
  "mongodb+srv://balram:anju@cluster0.8rd1h.mongodb.net/tribeuserbase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("server connected");
  }
);


app.use(express());


//Creating the schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("user", UserSchema);


//Routes---------------------------------------

//login
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({ email:email},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login successful" , user:user})
            }
            else{
                res.send({message:"password didnt match"})
            }
        }else{
            res.send("User not found")
        }
    })
});


//register
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user has already registered" });
    } else {
      const user = new User({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "successfully registered, please login now" });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`server is runnig on port ${port}`);
});

