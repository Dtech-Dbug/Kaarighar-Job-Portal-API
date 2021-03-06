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
		const user = await UserModel.findById(req.params.id).select('-password');
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

	console.log('REQ BODY =>', req.body);

	// generate reference code
	const referralCode = `${firstName}${lastName}${Math.floor(
		Math.random() * 100000
	)}`;

	try {
		//check if user already exists
		let user = await UserModel.findOne({ mobileNumber });
		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		} else {
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
					referralCode,
					role,
					aadharCard: {
						aadharNumber: aadharCard.aadharNumber,
						aadharImage: aadharCard.aadharImage,
					},
					panCard: {
						panNumber: panCard.panNumber,
						panImage: panCard.panImage,
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
					company: {
						companyName: company.companyName,
						companyRegNo: company.companyRegNo,
						companyAddress: company.companyAddress,
						companyContact: company.companyContact,
					},
				}).save();
			}

			// create admin
			if (req.body.role === 'Admin') {
				user = await new UserModel({
					firstName,
					lastName,
					email,
					password: hashedPassword,
					mobileNumber,
					role,
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
				}
			);
		}
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
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
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
			}
		);
	} catch (err) {
		console.error(err.message);
		console.log('ERROR WHILE LOGGING IN-->', err);
		res.status(500).send('Server error');
	}
};

// getAlluser function
exports.getUsers = async (req, res) => {
	try {
		//get all the users
		const allUsers = await UserModel.find();
		const users = allUsers.filter((user) => user.role !== 'Admin');
		res.json(users);
	} catch (err) {
		console.error(err.message);
		console.log('ERROR WHILE GETTING ALL USERS-->', err);
		res.status(500).send('Server error');
	}
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
			{ new: true }
		).exec();
		console.log('Recruiter Verified');
		res.json(findUserAndUpdate);
	} catch (err) {
		console.log('ERROR WHILE UDATING', err.message);
	}
};

exports.resetPassword = async (req, res) => {
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
		{ new: true }
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
			{ new: true }
		);
		res.json(updateUser);
	} catch (err) {
		console.log('ERROR WHILE PROFILING-->', err.message);
	}
};

// add address into user.address array
exports.addUserAddress = async (req, res) => {
	try {
		const {
			addressType,
			addressLine1,
			addressLine2,
			city,
			state,
			country,
			pincode,
			longitude,
			latitude,
		} = req.body;

		const { id } = req.user;
		const updateUser = await UserModel.findOneAndUpdate(
			{ _id: id },
			{
				$push: {
					address: {
						addressType,
						addressLine1,
						addressLine2,
						city,
						state,
						country,
						pincode,
						longitude,
						latitude,
					},
				},
			},
			{ new: true }
		);
		res.json(updateUser);
	} catch (err) {
		console.log('ERROR WHILE ADDING ADDRESS-->', err.message);
	}
};

// delete address from user.address array
exports.deleteUserAddress = async (req, res) => {
	try {
		const { addressId } = req.body;
		const { id } = req.user;

		const updateUser = await UserModel.findOneAndUpdate(
			{ _id: id },
			{
				$pull: {
					address: { _id: addressId },
				},
			},
			{ new: true }
		);
		res.json(updateUser);
	} catch (err) {
		console.log('ERROR WHILE DELETING ADDRESS-->', err.message);
	}
};

exports.getUsersAllAddress = async (req, res) => {
	try {
		const { id } = req.user;
		const updateUser = await UserModel.findOne({ _id: id });
		res.json(updateUser.address);
	} catch (err) {
		console.log('ERROR WHILE GETTING ADDRESS-->', err.message);
	}
};

exports.getUserAddress = async (req, res) => {
	try {
		const { addressId } = req.params;
		const { id } = req.user;
		const updateUser = await UserModel.findOne({ _id: id });
		const address = updateUser.address.filter(
			(address) => address._id == addressId
		);
		res.json(address);
	} catch (err) {
		console.log('ERROR WHILE GETTING ADDRESS-->', err.message);
	}
};

// delete address from user.address array
exports.deleteUserAddress = async (req, res) => {
	try {
		const { addressId } = req.params;
		const { id } = req.user;

		const updateUser = await UserModel.findOneAndUpdate(
			{ _id: id },
			{
				$pull: {
					address: { _id: addressId },
				},
			},
			{ new: true }
		);
		res.json(updateUser.address);
	} catch (err) {
		console.log('ERROR WHILE DELETING ADDRESS-->', err.message);
	}
};

// edit address from user.address array
exports.editUserAddress = async (req, res) => {
	try {
		const { addressId } = req.params;
		const {
			addressType,
			addressLine1,
			addressLine2,
			city,
			state,
			country,
			pincode,
			longitude,
			latitude,
		} = req.body;

		const { id } = req.user;
		const updateUser = await UserModel.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					'address._id': addressId,
					'address.addressType': addressType,
					'address.addressLine1': addressLine1,
					'address.addressLine2': addressLine2,
					'address.city': city,
					'address.state': state,
					'address.country': country,
					'address.pincode': pincode,
					'address.longitude': longitude,
					'address.latitude': latitude,
				},
			},
			{ new: true }
		);
		res.json(updateUser.address);
	} catch (err) {
		console.log('ERROR WHILE EDITING ADDRESS-->', err.message);
	}
};
