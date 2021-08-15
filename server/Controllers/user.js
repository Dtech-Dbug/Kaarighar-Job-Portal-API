const UserModel = require('../Model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getCurrentUser = async (req, res) => {
	try {
		const user = await UserModel.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};
exports.getUserByID = async (req, res) => {
	try {
		console.log('PARAMS-->', req.params.id);
		const user = await UserModel.findById(req.params.id).select(
			'-password',
		);
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

exports.getAdmin = async (req, res) => {
	try {
		const admin = await UserModel.findOne({ role: 'Admin' });
		res.json(admin);
		console.log(admin);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
};

exports.registerUser = async (req, res) => {
	console.log('REQ BODY =>', req.body);

	const {
		firstName,
		lastName,
		email,
		mobileNumber,
		aadharCard,
		panCard,
		address,
		role,
		company,
	} = req.body;

	var { password } = req.body;

	//@desc: Creating user using register route
	//@input: Registet from data
	//@output: JWT token for user (with expiry)

	try {
		let user = await UserModel.findOne({ mobileNumber });

		console.log('USER--->', user);

		if (user) {
			return res.json({ ok: true });
		}

		//generation
		const salt = await bcrypt.genSalt(10);

		//password
		hashedPassword = await bcrypt.hash(password, salt);

		// Creating user object and save

		if (req.body.role === 'Job Seeker') {
			user = await new UserModel({
				firstName,
				lastName,
				email,
				password: hashedPassword,
				mobileNumber,
				role,
				aadharCard: {
					aadharNumber: aadharCard.aadharNumber,
					aadharImage: aadharCard.aadharImage,
				},
				panCard: {
					panNumber: panCard.panNumber,
					panImage: panCard.panImage,
				},
				address: {
					addressLine1: address.addressLine1,
					addressLine2: address.addressLine2,
					city: address.city,
					state: address.state,
					country: address.country,
					zipCode: address.zipCode,
					latitude: address.latitude,
					longitude: address.longitude,
				},
			}).save();
		}

		if (req.body.role === 'Recruiter') {
			user = await new UserModel({
				firstName,
				lastName,
				email,
				password: hashedPassword,
				mobileNumber,
				role,
				address: {
					addressLine1: address.addressLine1,
					addressLine2: address.addressLine2,
					city: address.city,
					state: address.state,
					country: address.country,
					zipCode: address.zipCode,
					latitude: address.latitude,
					longitude: address.longitude,
				},
				company: {
					companyName: company.companyName,
					companyRegNo: company.companyRegNo,
					companyAddress: company.companyAddress,
					companyContact: company.companyContact,
				},
			}).save();
		}

		await console.log('User saved->', user);

		const payload = {
			user: {
				id: user.id,
				role: user.role,
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

		console.log('ERROR WHILE RESGISTERING-->', err);
		res.status(500).send('Server error');
	}
};

exports.loginUser = async (req, res) => {
	try {
		//get the logIn details from frontend
		const { mobileNumber, password } = req.body;

		//query the databse using the mobileNo to find the user
		let user = await UserModel.findOne({ mobileNumber });

		// checking if user exists or not
		if (!user) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		//compare the req.body.password with the password in the database
		const isMatch = await bcrypt.compare(password, user.password);

		//if password not matched then return error
		if (!isMatch) {
			return res.status(400).json('Mobile No. or Password is incorrect');
		}

		//if password matched then create the token

		// passing payload for the JWT
		const payload = {
			user: {
				id: user.id,
				role: user.role,
			},
		};

		// Creating the JWT token
		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '5 days' },
			(err, token) => {
				if (err) throw err;
				res.json({ token, login: true });
			},
		);
	} catch (err) {
		console.error(err.message);
		console.log('ERROR WHILE LOGGING IN-->', err);
		res.status(500).send('Server error');
	}
};

// getAlluser except admin role
exports.getUsers = async (req, res) => {
	const allUsers = await UserModel.find().exec();
	const users = allUsers.filter((user) => user.role !== 'Admin');
	res.json(users);
};

//controller function to verify users by admin
exports.verifyUsers = async (req, res) => {
	try {
		//we send userId and boolean value from frontEnd
		//userId of user(recruiter) we want to verify
		const { userId, verifiedState } = req.body;
		console.log(req.body);
		// find user by id and update verified state
		const findUserAndUpdate = await UserModel.findByIdAndUpdate(
			{ _id: userId },
			{ verified: verifiedState },
			{ new: true },
		).exec();
		console.log('Recruiter Verified');
		res.json(findUserAndUpdate);
	} catch (err) {
		console.log('ERROR WHILE UDATING', err.message);
	}
};

exports.resetPassword = async (req, res) => {
	console.log('REQ BODY FOR PW-->', req.body);
	const { mobileNumber, password } = req.body.values;
	console.log(typeof mobileNumber, typeof password);
	//generation
	const salt = await bcrypt.genSalt(10);

	//password
	hashedPassword = await bcrypt.hash(password, salt);

	// findoneandupdate by mobileNumber
	const updatePassword = await UserModel.findOneAndUpdate(
		{ mobileNumber: mobileNumber },
		{ password: hashedPassword },
		{ new: true },
	).exec();

	res.json(updatePassword);
};

//controller for editign profile
exports.setUpUserProfile = async (req, res) => {
	try {
		const { skills, about, experience, education } = req.body;

		const { id } = req.user;

		const updateUser = await UserModel.findOneAndUpdate(
			{ _id: id },
			{
				profile: {
					skills,
					about,
					education,
					experience,
				},
			},
			{ new: true },
		);

		res.json(updateUser);

		console.log('UPDATED USER --> ', updateUser);
	} catch (err) {
		console.log('ERROR WHILE PROFILING-->', err.message);
	}
};
