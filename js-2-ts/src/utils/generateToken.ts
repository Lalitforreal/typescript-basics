import jwt from "jsonwebtoken"
import User, {type IUser } from "../models/user-model.js";
import type { HydratedDocument } from "mongoose";

function generateToken(user :  HydratedDocument<IUser>) : string{
    return jwt.sign({email : user.email , id : user._id , role : user.role}, process.env.JWT_SECRET as string);
}

export default generateToken;


//here, import Iuser interface as a whole, then HydrateDocument<IUser> 
//Hydrate doc is important as timestamps,._id etc aren't specifically mentioned as a part of the mongoose obj/doc