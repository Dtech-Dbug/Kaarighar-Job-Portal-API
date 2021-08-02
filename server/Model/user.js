const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		mobileNumber: Number,
		aadharCard: Number,
		panCard: Number,
		address: String,
		pinCode: Number,
		hometown: String,
		workExperience: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("USER", userSchema);
