const express = require('express');
const app = express();

//to make the incoming data readable use 
app.use(express.json());
app.use(express.urlencoded({extended : true})); //form data

const cookieParser = require('cookie-parser');
app.engine('view')
app.get('/', (req,res)=>{
    res.send("hi");
})

app.listen(3000, (req,res)=>{
    console.log("Connected @ 3000");
})