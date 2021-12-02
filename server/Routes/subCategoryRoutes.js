const express = require('express');

const router = express.Router();

//middlewares
const { auth, isAdmin } = require('../Middleware/auth');

//controllers
const {
	createSubCategory,
	editSubCategory,
	getAllSubcategories,
	getSubCategory,
	deleteSubCategory,
	getSubCategoriesByParent,
} = require('../Controllers/subCategoryCotrollers');

//routes
router.post('/admin/sub-category', auth, isAdmin, createSubCategory);
router.get('/admin/sub-categories', auth, isAdmin, getAllSubcategories);
router.get('/admin/sub-category/:id', auth, isAdmin, getSubCategory);
router.get(
	'/admin/:id/sub-categories',
	auth,
	isAdmin,
	getSubCategoriesByParent
);
router.put('/admin/sub-category/:id', auth, isAdmin, editSubCategory);
router.delete('/admin/sub-category/:id', auth, isAdmin, deleteSubCategory);

module.exports = router;
