const UserModel = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUserByID = async (req, res) => {
	try {
		const user = await UserModel.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
};

exports.getAdmin = async (req, res) => {
	try {
		const admin = await UserModel.findOne({ role: "Admin" });
		res.json(admin);
		console.log(admin);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
};

exports.registerUser = async (req, res) => {
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

		console.log("USER--->", user);

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

		//save user
		const userSaved = await user.save();

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
			{ expiresIn: "5 days" },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);

		console.log("ERROR WHILE RESGISTERING-->", err);
		res.status(500).send("Server error");
	}
};

exports.loginUser = async (req, res) => {
	try {
		//get the logIn details from frontend
		const { mobileNumber, password } = req.body.values;

		//query the databse using the mobileNo to find the user
		let user = await UserModel.findOne({ mobileNumber });

		// checking if user exists or not
		if (!user) {
			return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
		}

		//compare the req.body.password with the password in the database
		const isMatch = await bcrypt.compare(password, user.password);

		//if password not matched then return error
		if (!isMatch) {
			return res.status(400).json("Mobile No. or Password is incorrect");
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
			{ expiresIn: "5 days" },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		console.log("ERROR WHILE LOGGING IN-->", err);
		res.status(500).send("Server error");
	}

	//get the logIn details from frontend
	console.log(req.body);

	const { mobileNumber, password } = req.body.values;

	const user = await UserModel.findOne({ mobileNumber }).exec();

	// checking if user exists or not
	if (!user) {
		// return res
		// 	.status(400)
		// 	.json({ errors: [{ msg: 'Invalid Credentials' }] });
		console.log("Inavalid Credentials");
	}

	//compare the req.body.password with the password in the database
	const isMatch = await bcrypt.compare(password, user.password);

	//if password not matched then return error
	if (!isMatch) {
		return res.status(400).json("Mobile No. or Password is incorrect");
	}

	//if password matched then create the token
	else if (user) {
		console.log("USER MATCHED");
		// creating payload for the JWT
		const payload = {
			user: {
				id: user.id,
			},
		};

		// Creating the JWT token
		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: "5 days" },
			(err, token) => {
				if (err) throw err;
				res.json({ token, login: true });
				console.log("TOKEN: ", res.json({ token }));
			}
		);
	}
};

exports.getUsers = async (req, res) => {
	const allUsers = await UserModel.find().exec();
	const users = allUsers.filter((user) => user.role !== "Admin");
	res.json(users);
};

//controller function to verify users by admin
exports.verifyUsers = async (req, res) => {
	try {
		//we send userId and boolean value from frontEnd
		//userId of user(recruiter) we want to verify

		const { userId, verifiedState } = req.body;

		const findUserAndUpdate = await UserModel.findByIdAndUpdate(
			{ id: userId },
			{ verified: verifiedState },
			{ new: true }
		).exec();

		res.json(findUserAndUpdate);
	} catch (err) {
		console.log("ERROR WHILE UDATING", err);
	}
};
