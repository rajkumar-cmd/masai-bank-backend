const express = require("express");
const { userModel } = require("../models/account.model");
const jwt = require("jsonwebtoken")
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Home Page")
})
userRouter.post("/openAccount", async (req, res) => {
    const { Name, Gender, DOB, Email, Mobile, InitialBalance, AdharNo, PanNo } = req.body;
    let users = await userModel.find({ Name });
    if (users.length > 0) {
        const token = jwt.sign({ userName: users[0]._id }, "masaiBank")
        res.send({ "msg": "Already Registered", "token": token,"details":users })
    } else {
        const user = new userModel({ Name, Gender, DOB, Email, Mobile, InitialBalance, AdharNo, PanNo });
        await user.save();
        users = await userModel.find({ Name });
        const token = jwt.sign({ userName: users[0]._id }, "masaiBank")
        res.send({ "msg": "Registered Successfully", "token": token , "details":users})
    }
})
userRouter.patch("/updateKYC/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const user=await userModel.find({"_id":id})
    try{
        await userModel.findByIdAndUpdate({"_id":id},payload)
        res.send({"msg":"Update Successfull","payload":payload,"id":id,"user":user});
    }catch(err){
        res.send({"msg":err})
    }
})

module.exports = {
    userRouter
}