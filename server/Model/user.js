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
		mobileNumber: {
			type: String,
			required: 'Name is Required',
		},
		password: {
			type: String,
			required: 'Name is Required',
		},
		
		email: String,

		aadharCard: Number,

		panCard: String,

		companyName: String,

		companyRegNo: String,

		address: String,

		pinCode: Number,

		city: String,
		
		location:{
			latitude: Number,
			longitude: Number,
		},
		
		verified: { type: Boolean, default: false },
		
		role: {
			type: String,
			enum: ['Admin', 'Job Seeker', 'Recruiter'],
		},
		
	},
	{ timestamps: true },
);

module.exports = mongoose.model('USER', userSchema);
