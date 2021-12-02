const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/category');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: { fieldSize: 10 * 1024 * 1024 },
	fileFilter,
});

//middlewares
const { auth, isAdmin } = require('../Middleware/auth');

//controllers
const {
	createCategory,
	listAllCategories,
	readCategory,
	removeCategory,
	updateCategory,
} = require('../Controllers/categoryControllers');

const { singleFileUpload } = require('../Controllers/fileUploadControllers');

const router = express.Router();

// CRUD FOR CATEGROIES
// create category route
router
	.post('/admin/category', auth, isAdmin, upload.single('file'), createCategory)
	.post('/singlefile', upload.single('file'), singleFileUpload);

//read categories
router.get('/admin/categories', listAllCategories);

//read a single category based on slug (for updating purpose)
router.get('/admin/category/:slug', readCategory);

//remove category
router.delete('/admin/category/:slug', auth, isAdmin, removeCategory);

//update categories
router
	.put(
		'/admin/category/:slug',
		auth,
		isAdmin,
		upload.single('file'),
		updateCategory
	)
	.post('/singlefile', upload.single('file'), singleFileUpload);
module.exports = router;
