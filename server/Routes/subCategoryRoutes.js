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
  getSubCategoriesByParent,
} = require("../Controllers/subCategoryCotrollers");

//routes
router.post("/sub-category", createSubCategory);
router.get("/sub-categories", getAllSubcategories);
router.get("/sub-category/:id", getSubCategory);
router.get("/:slug/sub-categories", getSubCategoriesByParent);
router.put("/sub-category/:id",  editSubCategory);
router.delete("/sub-category/:id",  deleteSubCategory);

module.exports = router;
