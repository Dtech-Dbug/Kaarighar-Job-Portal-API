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
router.post("/create/sub-category", auth, isAdmin, createSubCategory);
router.get("/get/sub-category", getAllSubcategories);
router.get("/get/sub-category/:id", getSubCategory);
router.post("/edit/sub-category/:id", auth, isAdmin, editSubCategory);
router.delete("/delete/sub-category/:id", auth, isAdmin, deleteSubCategory);

console.log(router);
