const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function registerUser(req,res){
        let {name,email , password} = req.body;

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
                res.cookie("token",token);//now with every req cookie will be sent
                return res.redirect('/login');
}

module.exports(registerUser);