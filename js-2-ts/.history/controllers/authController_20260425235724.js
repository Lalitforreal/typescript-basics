const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("j")
function registerUser(req,res){
        let {name,email , password} = req.body;
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password , salt, async (err, hash)=>{
                const user = userModel.findOne({email : email});
                if(user){
                    res.redirect("/login");
                }

                const newUser = userModel.create({
                    name,
                    email,
                    password : hash,
                    role : "user"
                });

                console.log("welcome", name);

                
            })
        })
        
}

module.exports(registerUser);