const express = require("express");

const router = express.Router();

//middlewares

//controllers
const {
	dummy,
	registerUser,
	loginUser,
} = require("../Controllers/registerUser");

router.get("/", (req, res) => {
	console.log("get /");
});

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
