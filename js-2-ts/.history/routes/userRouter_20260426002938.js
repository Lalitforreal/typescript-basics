const express = require("express");
const router = express.Router();

const registerUser = require("../con")

router.post('/register', registerUser);