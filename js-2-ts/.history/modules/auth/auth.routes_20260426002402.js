const express = require("express");
const router = express.Router();
const {registerUser} = require("../../controllers/authController");

app.post("/register", registerUser);