const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: 'Name is Required',
		},
		lastName: {
			type: String,
			required: 'Name is Required',
		},
		email: String,

		mobileNumber: {
			type: String,
			required: 'Name is Required',
		},
		password: {
			type: String,
		},
		aadharCard: {
			type: String,
		},
		panCard: Number,

		address: {
			type: String,
		},
		pinCode: Number,

		city: String,
		// workExperience: String,

		role: {
			type: String,
			enum: ['Admin', 'Job Seeker', 'Recruiter'],
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('USER', userSchema);
