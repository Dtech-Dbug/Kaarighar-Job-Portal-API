const express = require('express');

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

const router = express.Router();

//CRUD FOR CATEGROIES
//create category route
router.post('/admin/category', auth, isAdmin, createCategory);

//read categories
router.get('/admin/categories', listAllCategories);

//read a single category based on slug (for updating purpose)
router.get('/admin/category/:slug', readCategory);

//remove category
router.delete('/admin/category/:slug', auth, isAdmin, removeCategory);

//update categories
router.put('/admin/category/:slug', auth, isAdmin, updateCategory);

module.exports = router;
