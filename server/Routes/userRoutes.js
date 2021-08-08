const express = require('express');

//middlewares
const { auth, isAdmin } = require('../Middleware/auth');

const router = express.Router();

//controllers
const {
	registerUser,
	loginUser,
	getUserByID,
	getUsers,
	getAdmin,
	verifyUsers,
} = require('../Controllers/user');

//routes
router.post('/register', registerUser);
router.post('/login', loginUser);

//get users
router.get('/user', auth, getUserByID);
router.get('/users', auth, getUsers);

//admin
router.get('/admin', auth, isAdmin, getAdmin);

//verifying users(recruiters)
//only performed by admin so we pass both auth and isAdmin middleware
router.post('/admin/verifyuser', auth, isAdmin, verifyUsers);

module.exports = router;
		