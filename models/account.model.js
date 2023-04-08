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