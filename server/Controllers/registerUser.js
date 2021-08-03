const UserModel = require("../Model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.dummy = async (req, res) => {
	console.log("Dummy woute getting request");
};

exports.registerUser = async (req, res) => {
	console.log("Hello, RegisterApi ");
	console.log(req.body);

	//doactions here , move the call back function to a seperate controller folder for better structure
	console.log("req.body: ", req.body);

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
		console.log("PASSWORD HASHED--->", user.password);

		//save user
		const userSaved = await user.save();
		console.log("USER ____>", userSaved);

		const payload = {
			user: {
				id: user.id, // null.id
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
		console.log("ERROR WHILE RESGISTERING__>", err);
		res.status(500).send("Server error");
	}
};

exports.loginUser = async (req, res) => {
	//step 1
	//get the logIn details from frontend
	const { mobileNumber, password } = req.body.values;

	//step2
	//query the databse using the mobileNo to find the user

	const user = await UserModel.findOne(mobileNumber).exec();

	//destructure mobile and password from user database
	const { mobileNumber, password } = user;
	//step3
	//compare the req.body.password with the password in the database

	//step4
	//send ok response and login user if the comparison matches
	//else , show error
	//BRO i am on a call, I have not left discord
};
