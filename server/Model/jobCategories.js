const mongoose = require("mongoose");

const { Schema } = mongoose;

const categoriesSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			minLength: ["3", "Too Short"],
			text: true,
		},
		slug: {
			type: String,
			trim: true,
			lowercase: true,
			index: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("CATEGORIES", categoriesSchema);
