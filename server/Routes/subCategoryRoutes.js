const express = require("express");

const router = express.Router();

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

//controllers
const {
  createSubCategory,
  editSubCategory,
  getAllSubcategories,
  getSubCategory,
  deleteSubCategory,
} = require("../Controllers/subCategoryCotrollers");

//routes
router.post("/create/subcategory", auth, isAdmin, createSubCategory);
router.get("/get/subcategory", getAllSubcategories);
router.get("/get/subcategory/:slug", getSubCategory);
router.post("/edit/subcategory/:slug", auth, isAdmin, editSubCategory);
router.delete("/delete/subcategory/:slug", auth, isAdmin, deleteSubCategory);


