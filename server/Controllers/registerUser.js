const UserModel = require('../Model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.dummy = async (req, res) => {
	console.log('Dummy woute getting request');
};

exports.registerUser = async (req, res) => {
	console.log('Hello, RegisterApi ');
	//doactions here , move the call back function to a seperate controller folder for better structure
	console.log('req.body: ', req.body);
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
	} = req.body.values;

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
		// const salt = await bcrypt.genSalt(10);

		// Hashing the password
		// user.password = await bcrypt.hash(password, salt);

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
		console.log('ERROR WHILE RESGISTERING__>', err);
		res.status(500).send('Server error');
	}
};
