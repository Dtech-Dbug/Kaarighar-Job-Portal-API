const UserModel = require('../Model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.dummy = async (req, res) => {
	console.log('Dummy woute getting request');
};

exports.registerUser = async (req, res) => {
	console.log('Hello, RegisterApi ');
	console.log(req.body);

	//doactions here , move the call back function to a seperate controller folder for better structure
	console.log('req.body: ', req.body);

	const {
		firstName,
		lastName,
		email,
		mobileNumber,
		aadharCard,
		panCard,
		address,
		pinCode,
		city,
		role,
	} = req.body.values;

	var { password } = req.body.values;

	//@desc: Creating user using register route
	//@input: Registet from data
	//@output: JWT token for user (with expiry)

	try {
		let user = await UserModel.findOne({ mobileNumber });

		console.log('USER--->', user);

		if (user) {
			return res.json({ ok: true });
		}

		// Creating user object and save
		user = new UserModel({
			firstName,
			lastName,
			email,
			password,
			mobileNumber,
			aadharCard,
			panCard,
			address,
			pinCode,
			city,
			role,
		});

		// Creating the secret key for the JWT
		const salt = await bcrypt.genSalt(10);

		// Hashing the password
		user.password = await bcrypt.hash(password, salt);
		console.log('PASSWORD HASHED--->', user.password);

		//save user
		const userSaved = await user.save();
		console.log('USER --->', userSaved);

		const payload = {
			user: {
				id: user.id, // null.id
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

exports.loginUser = async (req, res) => {
	try {
		console.log('req -> body --->', req.body);
		//step 1
		//get the logIn details from frontend
		// let { mobileNumber, password } = req.body.values;

		const mobileNumber = 8758549166;
		const password = 'qwerty123';

		console.log('mobileNumber: ', mobileNumber);
		console.log('password: ', password);

		//step2
		//query the databse using the mobileNo to find the user
		let user = await UserModel.findOne({ mobileNumber });

		// step 3
		// checking if user exists or not
		if (!user) {
			// return res
			// 	.status(400)
			// 	.json({ errors: [{ msg: 'Invalid Credentials' }] });
			console.log('Inavalid Credentials');
		}

		//step 4
		//compare the req.body.password with the password in the database
		const isMatch = await bcrypt.compare(password, user.password);

		//step 5
		//if password not matched then return error
		if (!isMatch) {
			return res.status(400).json('Mobile No. or Password is incorrect');
		}

		// step 6
		//if password matched then create the token

		// creating payload for the JWT
		const payload = {
			user: {
				id: user.id,
			},
		};

		// step 7
		// Creating the JWT token
		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '5 days' },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
				console.log('TOKEN: ', res.json({ token }));
			},
		);
	} catch (err) {
		console.error(err.message);
		console.log('ERROR WHILE LOGGING IN-->', err);
		res.status(500).send('Server error');
	}
};
