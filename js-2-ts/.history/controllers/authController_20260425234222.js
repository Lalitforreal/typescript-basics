const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

function registerUser(req,res){
    try{
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password , salt, async (err, hash)=>{
                let {email , password} = req.body;
                const user = userModel.findOne({email : email});
                if(user){
                    res.redirect("/login");
                }
                
                
            })
        })
        
    }catch(err){

    }
}

module.exports(registerUser);