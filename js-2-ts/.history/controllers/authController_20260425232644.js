const express = require("express");
const userModel = require("../models/user-model");

function registerUser(req,res){
    try{
        let {email , password} = req.body;

    }catch(err){

    }
}

module.exports(registerUser);