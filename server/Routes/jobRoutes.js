const express = require("express");

const router = express.Router();

//middlewares
const { auth, isRecruiter } = require("../Middleware/auth");

//controllers
const {
	createJob,
	listAllJobs,
	readJob,
	updateJob,
	deleteJob,
	readJobsBasedOnCategories
} = require("../Controllers/jobListControllers");

//routes
//create
router.post("/job", auth, isRecruiter, createJob);

//read
router.get("/jobs", listAllJobs);

//read a single jobs
router.get("/job/:slug", readJob);

//update
router.put("/job/:slug", auth, isRecruiter, updateJob);

//delete
router.delete("/job/:slug", auth, isRecruiter, deleteJob);

//get jobs based on categories

router.get('/jobs/:categoryId' , readJobsBasedOnCategories)

module.exports = router;
