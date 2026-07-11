const express = require("express");
const userModel = require("../models/user-model");

function registerUser(req,res){
    try{
        const {email , password} = req.body;
        
    }catch(err){

    }
}

module.exports(registerUser);