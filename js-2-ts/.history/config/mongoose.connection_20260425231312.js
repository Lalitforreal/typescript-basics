const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        mongoose.connect(process.env)
    }
}