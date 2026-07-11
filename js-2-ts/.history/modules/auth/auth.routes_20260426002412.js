const express = require("express");
const app = express.Router();
const router = express.Router();
const {registerUser} = require("../../controllers/authController");

app.post("/register", registerUser);