const express = require("express");
const userModel = require("../models/user-model");

function registerUser(req,res){
    try{
        let {email , password} = req.body;
        const user = userModel.findOne({email : email})
    }catch(err){

    }
}

module.exports(registerUser);