
//const express=require("express");
import express from "express";
const app = express();
//require("dotenv").config()
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('dist'));
// app.get("/",(req,res)=>{
//     res.send("hello");
// })

app.get("/api/jokes", (req, res) => {
    let jokes = [
        {
            "title": "jokes",
            "name": "joke1"
        },
        {
            "title": "jokes",
            "name": "joke2"
        },
        {
            "title": "jokes",
            "name": "joke3"
        },
        {
            "title": "jokes",
            "name": "joke4"
        }
    ]

    res.send(jokes);
})


app.listen(port, () => {
    console.log(`Server is listening on port -> ${port}`);
})  