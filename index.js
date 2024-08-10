require("dotenv").config()
const express=require("express");
const app=express();
let port=4000;

app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port -> ${port}`);
})