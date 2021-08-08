const slugify = require("slugify");
const CATEGORIES = require("../Model/jobCategories");
const JOBS = require("../Model/jobListings");
const USER = require("../Model/user");

//createJob , listAllJobs, readJob , udpdateJob , deleteJob

exports.createJob = async (req, res) => {
	try {
		const { name, parent, recruiter } = req.body;

		const job = await new JOBS({
			name,
			parent,
			slug: slugify(name),
		});

		console.log("JOB CREATED--->", job);
		res.json(json);
	} catch (err) {
		console.log("ERROR WHILE CREATING JOB-->", err.message);
	}
};

exports.listAllJobs = async (req, res) => {
	try {
		const jobs = await JOBS.find({}).exec();

		res.json(jobs);
	} catch (err) {
		console.log("ERROR WHIILE LISING JOBS-->", err.message);
	}
};

exports.readJob = async (req, res) => {};

exports.updateJob = async (req, res) => {};

exports.deleteJob = async (req, res) => {};
