const slugify = require('slugify');
const CATEGORIES = require('../Model/jobCategories');
const fs = require('fs');
//controller functions for category CRUD

exports.createCategory = async (req, res) => {
	try {
		const { title } = req.body;
		console.log('CREATE Category Details->', req.body);
		console.log('File ->', req.file);
		console.log('Title ->', title);

		if (req.file) {
			const category = new CATEGORIES({
				title: title,
				slug: slugify(title),
				images: {
					fileName: req.file.originalname,
					filePath: req.file.path,
					fileSize: req.file.size,
					fileType: req.file.mimetype,
				},
			});
			await category.save();
			console.log(`Category ${category.title} is created`);
			res.json(category);
		} else {
			console.log('No file is uploaded');
		}
	} catch (err) {
		console.log('ERROR while CREATING CATEGORY->', err.message);
		res.status(400).send('OOPS! Something went wrong.');
	}
};

exports.listAllCategories = async (req, res) => {
	try {
		const allCategories = await CATEGORIES.find({})
			.sort({ createdAt: -1 })
			.exec();

		res.json(allCategories);
	} catch (err) {
		console.log('ERROR while LISTING a all CATEGORY-->', err);
		res.status(400).send('OOPS! Something went wrong.');
	}
};

exports.readCategory = async (req, res) => {
	try {
		const category = await CATEGORIES.findOne({ slug: req.params.slug }).exec();

		res.json(category);
	} catch (err) {
		console.log('ERROR while LISTING a single CATEGORY-->', err);
		res.status(400).send('OOPS! Something went wrong.');
	}
};

exports.removeCategory = async (req, res) => {
	try {
		const category = await CATEGORIES.findOne({ slug: req.params.slug }).exec();
		const { filePath } = category.images;
		console.log('File path to be deleted->', filePath);

		fs.unlink(filePath, (err) => {
			if (err) {
				console.log('ERROR while deleting file->', err);
			} else {
				console.log('File deleted successfully');
			}
		});

		const deletedCategory = await CATEGORIES.findOneAndDelete({
			slug: req.params.slug,
		}).exec();
		res.json(deletedCategory);
	} catch (err) {
		console.log('ERROR while DELETING a single CATEGORY-->', err);
		res.status(400).send('OOPS! Something went wrong.');
	}
};

exports.updateCategory = async (req, res) => {
	try {
		console.log('EDIT Category Details->', req.body);

		const { title } = req.body;

		const updatedcategory = await CATEGORIES.findOneAndUpdate(
			{
				slug: req.params.slug,
			},
			{
				title: title,
				slug: slugify(title),
				images: {
					fileName: req.file.originalname,
					filePath: req.file.path,
					fileSize: req.file.size,
					fileType: req.file.mimetype,
				},
			},
			{ new: true }
		);

		console.log('UPDATED-->', updatedcategory);
		res.json(updatedcategory);
	} catch (err) {
		console.log('ERROR WHILE updating A SINGLE CATEGORY-->', err);
		res.status(400).send('OOPS! Something went wrong.');
	}
};
