const express = require('express');
const app = express();

//to make the incoming data readable use 
app.use(express.json());
app.use(express.ur)

app.get('/', (req,res)=>{
    res.send("hi");
})

app.listen(3000, (req,res)=>{
    console.log("Connected @ 3000");
})