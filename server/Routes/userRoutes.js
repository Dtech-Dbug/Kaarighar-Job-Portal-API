const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../Model/user');

//middlewares

//controllers
const { dummy } = require('../Controllers/registerUser');

router.get('/', (req, res) => {
	console.log('get /');
});

//routes
router.post('/register', async (req, res) => {
	console.log('Hello, RegisterApi ');
	//doactions here , move the call back function to a seperate controller folder for better structure

	const {
		firstName,
		lastName,
		email,
		password,
		mobileNumber,
		aadharCard,
		panCard,
		address,
		pincode,
		hometown,
	} = req.body;

	//@desc: Creating user using register route
	//@input: Registet from data
	//@output: JWT token for user (with expiry)

	try {
		let user = await UserModel.findOne({ mobileNumber });

		if (user) {
			return res
				.status(400)
				.status(400)
				.json({ errros: [{ msg: 'User already exits' }] });
		}

		// Creating user object
		user = await UserModel({
			firstName,
			lastName,
			email,
			password,
			mobileNumber,
			aadharCard,
			panCard,
			address,
			pincode,
			hometown,
		});

		// Creating the secret key for the JWT
		const salt = await bcrypt.genSalt(10);

		// Hashing the password
		user.password = await bcrypt.hash(password, salt);

		// Saving the user
		await user.save();

		const payload = {
			user: {
				id: user.id,
			},
		};

		// Creating the JWT token
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '5 days' },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			},
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
