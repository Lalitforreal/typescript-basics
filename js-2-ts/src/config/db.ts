
import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string); //or use ! in end -> is non - null assertino 
        console.log("DB connected");
    }catch(err){
        console.log("Mongo error : " , err);
    }
}

export {connectDB};