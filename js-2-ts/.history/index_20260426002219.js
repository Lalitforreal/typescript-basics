const express = require('express');
const app = express();

//to make the incoming data readable use 
app.use(express.json());
app.use(express.urlencoded({extended : true})); //form data
const connectDB = require("./config/mongoose.connection");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const cookieParser = require('cookie-parser');
app.set("view engine", "ejs");
app.set('views','./views'); //set ejs
const registerUser = 

app.use("/register", );

app.use("/", require('./routes/viewRoutes') );


app.listen(3000, (req,res)=>{
    console.log("Connected @ 3000");
})