const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const jobListingSchema = new Schema(
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
			text: true,
		},
		parent: {
			type: ObjectId,
			ref: "CATEGORIES",
			required: true,
		},

		recruiter: {
			type: ObjectId,
			ref: "USER",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("JOBS", jobListingSchema);
