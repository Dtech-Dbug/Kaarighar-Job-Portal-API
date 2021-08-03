const express = require('express');

//middlewares
const auth = require('../Middleware/auth');

const router = express.Router();

//controllers
const {
	dummy,
	registerUser,
	loginUser,
	getUserByID,
	getUsers,
} = require('../Controllers/registerUser');

//routes
router.get('/user', auth, getUserByID);
router.post('/register', registerUser);
router.post('/login', loginUser);

//get users
router.get('/users', getUsers);

module.exports = router;
