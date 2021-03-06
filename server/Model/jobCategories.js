const mongoose = require('mongoose');

const { Schema } = mongoose;

//text field to be able to search the categories by text in the future

const categoriesSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			minLength: ['3', 'Too Short'],
			text: true,
		},
		slug: {
			type: String,
			trim: true,
			lowercase: true,
			index: true,
			text: true,
		},

		images: {
			fileName: {
				type: String,
			},
			filePath: {
				type: String,
			},
			fileType: {
				type: String,
			},
			fileSize: {
				type: String,
			},
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('CATEGORIES', categoriesSchema);
