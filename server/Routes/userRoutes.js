const express = require("express");

const router = express.Router();

//middlewares

//controllers
const { dummy, registerUser } = require("../Controllers/registerUser");

router.get("/", (req, res) => {
	console.log("get /");
});

//routes
router.post("/register", registerUser);

module.exports = router;
