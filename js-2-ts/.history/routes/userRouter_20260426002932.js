const express = require("express");
const router = express.Router();

const registerUser = require("./")

router.post('/register', registerUser);