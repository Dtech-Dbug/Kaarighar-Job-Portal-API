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

exports.listAllCategories = async (req, res) => {};

exports.readCategory = async (req, res) => {};

exports.removeCategory = async (req, res) => {};

exports.updateCategory = async (req, res) => {};
