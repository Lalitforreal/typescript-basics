const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

function registerUser(req,res){
        let {email , password} = req.body;
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password , salt, async (err, hash)=>{
                const user = userModel.findOne({email : email});
                if(user){
                    res.redirect("/login");
                }

                const newUser = userModel.create

                
            })
        })
        
}

module.exports(registerUser);