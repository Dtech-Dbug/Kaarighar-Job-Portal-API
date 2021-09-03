const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const jobListingSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			minLength: ['3', 'Too Short'],
			text: true,
		},
		image: {
			type: String,
		},
		slug: {
			type: String,
			trim: true,
			lowercase: true,
			index: true,
			text: true,
		},
		position:{
			type: String
		},
		noRole: {
			type: Number,
			true: true,
			minLength: ['1', 'Mush be greater then 0'],
		},
		requirement: {
			type: String,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		parent: {
			type: ObjectId,	
			ref: 'CATEGORIES',
			required: true,
		},
		location:{
			type: String
		},
		recruiter: {
			type: ObjectId,
			ref: 'USER',
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('JOBS', jobListingSchema);
