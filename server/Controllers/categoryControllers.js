const slugify = require("slugify");
const CATEGORIES = require("../Model/jobCategories");

//controller functions for category CRUD

exports.createCategory = async (req, res) => {
	try {
		const { title } = req.body;

		const category = await new CATEGORIES({
			title,
			slug: slugify(title),
		}).save();
		console.log("Category created w/ title :", category);
		res.json(category);
	} catch (err) {
		console.log("ERROR WHILE CREATING CATEGORY", err);
		res.status(400).send("OOPS! Something went wrong.Check the console.");
	}
};

exports.listAllCategories = async (req, res) => {
	try {
		const allCategories = await CATEGORIES.find({})
			.sort({ createdAt: -1 })
			.exec();

		res.json(allCategories);
	} catch (err) {
		console.log(err);
		res.send("OOPS SOMETHINF WENT WRONG. Check the console.");
	}
};

exports.readCategory = async (req, res) => {
	try {
		const category = await CATEGORIES.findOne({ slug: req.params.slug }).exec();

		res.json(category);
	} catch (err) {
		console.log("ERROR WHILE LISTING A SINGLE CATEGORY-->", err);
		res.sedn("OOPS! Somehing went wrong while reading a single categiry");
	}
};

exports.removeCategory = async (req, res) => {};

exports.updateCategory = async (req, res) => {};
