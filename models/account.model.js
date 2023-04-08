const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:String,
    Gender:String,
    DOB:String,
    Email:String,
    Mobile:Number,
    InitialBalance:Number,
    AdharNo:Number,
    PanNo:Number
})

const userModel=mongoose.model("user",userSchema);

module.exports={
    userModel
}

// {
//     "Name":"Amit",
//     "Gender":"Male",
//     "DOB":"1999-12-28",
//    "Email":"amit@gmail.com",
//    "Mobile":9875487846,
//    "InitialBalance":750000,
//    "AdharNo":987654321,
//    "PanNo":123456789
// }