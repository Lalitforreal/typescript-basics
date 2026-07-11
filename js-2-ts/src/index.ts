
import express from "express";
import { connectDB } from "./config/db.js";


const app = express();

//to make the incoming data readable use 
app.use(express.json());
app.use(express.urlencoded({extended : true})); //form data


import dotenv from "dotenv";

dotenv.config();
connectDB();

app.set("view engine", "ejs");
app.set('views','./src/views'); //set ejs

import userRouter from "./routes/userRouter.js";
import viewRouter from "./routes/viewRoutes.js";
app.use("/", viewRouter);
app.use("/user", userRouter);



app.listen(3000, () =>{
    console.log("Connected @ 3000");
})