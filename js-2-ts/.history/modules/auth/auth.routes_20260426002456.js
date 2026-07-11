const express = require("express");
const router = express.Router();
const {registerUser} = require("../../controllers/authController");

.post("/register", registerUser);