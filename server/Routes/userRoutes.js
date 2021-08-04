const express = require('express');

//middlewares
const { auth, userRole } = require('../Middleware/auth');

const router = express.Router();

//controllers
const {
	registerUser,
	loginUser,
	getUserByID,
	getUsers,
	getAdmin,
} = require('../Controllers/user');

//routes
router.post('/register', registerUser);
router.post('/login', loginUser);

//get users
router.get('/user', auth, getUserByID);
router.get('/users', auth, getUsers);

//admin
router.get('/admin', auth, userRole, getAdmin);

module.exports = router;
