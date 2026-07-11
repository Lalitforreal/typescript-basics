const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");



module.exports = async function registerUser(req,res){
    let {name,email , password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await userModel.findOne({email : email});
    if(user){
        return res.redirect("/login");
    }
    const newUser = await userModel.create({
        name,
        email,
        password : hash,
        role : "user"
    });
    console.log("welcome", name);
    let token = generateToken(newUser);

    // res.cookie("token",token);//now with every req cookie will be sent, not secure currently 

    res.cookie("token", token, {
        httpOnly : true,
        secure : true,
        sameSite : "Strict"
    });

    res.send("welcome you're registered");
    //redirect now
}

module.exports = async function(req,res){
    let { email , password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            console.log("register first");
            return res.redirect("/user/register");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if(!isMatch){
            res.send("invalid cred");
            res.red
        }
        const token = generateToken(user);
        res.cookie("token", token, {
            httpOnly : true,
            secure : true,
            sameSite : "Strict"
        });
    
        console.log("cookie token: ",token);
        res.send("login hogaya janab");
    }catch(err){
        console.log(err);
        return res.redirect('/user/login');
    }

}


