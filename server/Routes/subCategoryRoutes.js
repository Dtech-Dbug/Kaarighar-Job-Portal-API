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
router.post("/createSub", createSubCategory);
router.get("/getSubs", getAllSubcategories);
router.get("/sub/:id", getSubCategory);
router.post("/edit/Sub/:id", auth, isAdmin, editSubCategory);
router.delete("/delete/Sub/:id", auth, isAdmin, deleteSubCategory);

module.exports = router;