const express = require("express");

//middlewares
const { auth, userRole } = require("../Middleware/auth");

const router = express.Router();

//controllers
const {
	registerUser,
	loginUser,
	getUserByID,
	getUsers,
	getAdmin,
	verifyUsers,
} = require("../Controllers/user");

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//get users
router.get("/user", auth, getUserByID);
router.get("/users", auth, getUsers);

//admin
router.get("/admin", auth, userRole, getAdmin);

//verifying users(recruiters)
//only performed by admin so we pass both auth and userRole middleware
router.post("/admin/verifyuser", auth, userRole, verifyUsers);

module.exports = router;
