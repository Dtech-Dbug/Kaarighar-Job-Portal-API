const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: "Name is Required",
		},
		lastName: {
			type: String,
			required: "Name is Required",
		},
		email: String,

		mobileNumber: {
			type: Number,
			required: "Name is Required",
		},
		aadharCard: {
			type: Number,
			required: true,
		},
		panCard: Number,

		address: {
			type: String,
			required: true,
		},
		pinCode: Number,

		hometown: String,
		// workExperience: String,

		role: {
			type: String,
			enum: ["Admin", "Job Seeker", "Recruiter"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("USER", userSchema);
