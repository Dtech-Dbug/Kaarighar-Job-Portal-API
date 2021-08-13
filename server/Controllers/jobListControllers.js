const slugify = require('slugify');
const CATEGORIES = require('../Model/jobCategories');
const JOBS = require('../Model/jobListings');
const USER = require('../Model/user');

//createJob , listAllJobs, readJob , udpdateJob , deleteJob

exports.createJob = async (req, res) => {
	try {
		const { name, parent, image, noRole, description, requirement } =
			req.body;
		const { id } = req.user;

		const job = await new JOBS({
			name,
			parent,
			noRole,
			image,
			requirement,
			description,
			slug: slugify(name),
			recruiter: id,
		}).save();

		console.log('JOB CREATED--->', job);
		res.json(job);
	} catch (err) {
		console.log('ERROR WHILE CREATING JOB-->', err.message);
	}
};

exports.listAllJobs = async (req, res) => {
	try {
		// get all jobs with last created at

		const jobs = await JOBS.find({})
			.sort({ createdAt: -1 })
			.populate('parent', 'title')
			.populate(
				'recruiter',
				'firstName lastName companyName companyRegNo location',
			)
			.exec();

		console.log('JOBS-->', jobs);

		res.json(jobs);
	} catch (err) {
		console.log('ERROR WHIILE LISING JOBS-->', err.message);
	}
};

exports.readJob = async (req, res) => {
	try {
		const { slug } = req.params;
		const job = await JOBS.findOne({ slug }).exec();
		console.log('JOB-->', job);
		res.json(job);
	} catch (err) {
		console.log('ERROR WHILE READING JOB-->', err.message);
	}
};

// updateJob
exports.updateJob = async (req, res) => {
	try {
		const { name, parent, image, noRole, description, requirement } =
			req.body;
		const { id } = req.user;

		const job = await JOBS.findOneAndUpdate(
			{ slug: req.params.slug },
			{
				name,
				parent,
				noRole,
				image,
				requirement,
				description,
				slug: slugify(name),
				recruiter: id,
			},
		).exec();

		console.log('JOB UPDATED-->', job);
		res.json(job);
	} catch (err) {
		console.log('ERROR WHILE UPDATING JOB-->', err.message);
	}
};

exports.deleteJob = async (req, res) => {
	try {
		const { slug } = req.params;
		const job = await JOBS.findOneAndRemove({ slug }).exec();
		console.log('JOB DELETED-->', job);
		res.json(job);
	} catch (err) {
		console.log('ERROR WHILE DELETING JOB-->', err.message);
	}
};

exports.readJobsBasedOnCategories = async(req, res) =>{
try {
	const category =  req.params.category;
	console.log(typeof(category))

	const jobs = await JOBS.find({parent : category}).exec()

	res.json(jobs)
}
catch(err){
	console.log('Error message->', err.message)
}
}