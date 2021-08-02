const express = require("express");

const router = express.Router();

//middlewares

//controllers
const { dummy } = require("../Controllers/registerUser");

//routes
router.post("/register", (req, res) => {
	console.log("Hello, RegisterApi ");
	//doactions here , move the call back function to a seperate controller folder for better structure
});

//dummy
router.get("/dummy", dummy);

module.exports = router;
