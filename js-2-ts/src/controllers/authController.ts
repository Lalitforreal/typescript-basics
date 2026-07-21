
import userModel, {type IUser} from "../models/user-model.js";
import bcrypt from "bcrypt";
import type {Request, Response} from "express";

// import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
import type { HydratedDocument } from "mongoose";

interface registerBody{
    name : string;
    email : string;
    password : string
}

async function registerUser(req : Request,res : Response){
    const body : registerBody = req.body;
    const salt : string = await bcrypt.genSalt(10);
    const hash : string = await bcrypt.hash(body.password ,salt);

    const user : HydratedDocument<IUser> | null = await userModel.findOne({email : body.email});

    if(user){
        return res.redirect("/login");
    }
    const newUser : HydratedDocument<IUser> = await userModel.create({
        name : body.name,
        email :body.email,
        password : hash,
        role : "user"
    });
    console.log("welcome", newUser.name);
    const token : string = generateToken(newUser);

    // res.cookie("token",token);//now with every req cookie will be sent, not secure currently 

    res.cookie("token", token, {
        httpOnly : true,
        secure : true,
        sameSite : "strict"
    });

    res.send("welcome you're registered");
    //redirect now
}


interface loginBody{
    email : string;
    password :string
}
async function loginUser(req : Request,res : Response){
    const body : loginBody = req.body;
    try{
        const user : HydratedDocument<IUser> | null = await userModel.findOne({email : body.email});
        if(!user){
            console.log("register first");
            return res.status(404).send("user not found");
        }
        const isMatch : boolean = await bcrypt.compare(body.password, user.password);
        console.log(isMatch);
        if(!isMatch){
            res.status(401).send("invalid cred");
            
        }
        const token : string = generateToken(user);
        res.cookie("token", token, {
            httpOnly : true,
            secure : true,
            sameSite : "strict"
        });
    
        console.log("cookie token: ",token);
        return res.status(200).send("login hogaya janab");
    }catch(err ){
        console.log(err);
        return res.status(400).redirect('/user/login');
    }

}

export {loginUser, registerUser};


