const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/user");

//middlewares

//controllers
const { dummy, registerUser } = require("../Controllers/registerUser");

router.get("/", (req, res) => {
	console.log("get /");
});

//routes
router.post("/register", registerUser);

module.exports = router;
