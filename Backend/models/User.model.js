const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       min: 3,
//       max: 20,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//     reEnterPassword:{
//         type: String,
//         required: true,
//         min: 6,
//     }

//   },
//   {
//     timestamps: true,
//   }
// );

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports =  new mongoose.model("user", UserSchema);