const express=require("express");
const {connections} = require("./config/db");
const {userRouter}=require("./routes/account.route");

const cors=require("cors");
require("dotenv").config()

const app=express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use("/",userRouter)

app.listen(process.env.port,async()=>{
    try{
        await connections;
        console.log("Connected");
    }catch(err){
        console.log("err",err);
    }
    console.log(`Connected to port ${process.env.port}`)
})