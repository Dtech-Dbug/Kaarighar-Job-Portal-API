const express = require("express");

const router = express.Router();

//middlewares

//controllers
const {
	dummy,
	registerUser,
	loginUser,
	getUsers,
} = require("../Controllers/registerUser");

router.get("/", (req, res) => {
	console.log("get /");
});

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//get users
router.get("/users", getUsers);

module.exports = router;
