const express = require("express");
const { userModel } = require("../models/account.model");
const jwt = require("jsonwebtoken")
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("Home Page")
})
userRouter.post("/openAccount", async (req, res) => {
    const { Name, Gender, DOB, Email, Mobile, InitialBalance, AdharNo, PanNo } = req.body;
    // try {
        const users = await userModel.find({ Name });
        if (users.length > 0) {
            const token=jwt.sign({userID:users[0]._id},"masaiBank")
            res.send({ "msg": "Already Registered","token":token })
        } else {
            const user = new userModel({ Name, Gender, DOB, Email, Mobile, InitialBalance, AdharNo, PanNo });
            await user.save();
            const token=jwt.sign({userID:users.name},"masaiBank")
            res.send({ "msg": "Registered Successfully","token":token })
        }
    // } catch (err) {
        // res.send({ "msg": "Registeration Failed" })
    // }
})

module.exports={
    userRouter
}