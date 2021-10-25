const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: 'First Name is Required',
		},

		lastName: {
			type: String,
			required: 'Last Name is Required',
		},

		mobileNumber: {
			type: String,
			required: 'Mobile Number is Required',
		},

		password: {
			type: String,
			required: 'Password is Required',
		},
		userImageDetails: {
			type: String,
		},

		email: String,

		aadharCard: {
			aadharNumber: Number,
			aadharImage: String,
		},

		panCard: {
			panNumber: String,
			panImage: String,
		},

		company: {
			companyName: String,
			companyRegNo: String,
			companyAddress: String,
			companyContact: String,
		},

		address: {
			addressLine1: String,
			addressLine2: String,
			city: String,
			state: String,
			country: String,
			zipCode: String,
			latitude: Number,
			longitude: Number,
		},

		profile: {
			skills: {
				type: Array,
			},

			about: {
				type: String,
			},
			experience: [
				{
					title: {
						type: String,
					},
					company: {
						type: String,
					},
					location: {
						type: String,
					},
					from: {
						type: Date,
					},
					to: {
						type: Date,
					},
					current: {
						type: Boolean,
						default: false,
					},
					description: {
						type: String,
					},
				},
			],
			education: [
				{
					school: {
						type: String,
					},
					degree: {
						type: String,
					},
					fieldofstudy: {
						type: String,
					},
					from: {
						type: Date,
					},
					to: {
						type: Date,
					},
					current: {
						type: Boolean,
						default: false,
					},
					description: {
						type: String,
					},
				},
			],
		},

		verified: { type: Boolean, default: false },
		referralCode: { type: String, unique: true },
		referrer: { type: String, default: null },

		role: {
			type: String,
			enum: ['Admin', 'Job Seeker', 'Recruiter'],
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("USER", userSchema);
