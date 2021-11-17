const express = require("express");
const multer = require("multer");
const path = require("path");
const { upload } = require("../Helper/fileupload");

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

//controllers
const {
  createCategory,
  listAllCategories,
  readCategory,
  removeCategory,
  updateCategory,
} = require("../Controllers/categoryControllers");

const {
  singleFileUpload,
} = require("../Controllers/fileUploadControllers");

const router = express.Router();

// CRUD FOR CATEGROIES
// create category route
router.post(
  "/admin/category",
  auth,
  isAdmin,
  upload.single("file"),
  createCategory
).post("/singlefile", upload.single("file"), singleFileUpload);

//read categories
router.get("/admin/categories", listAllCategories);

//read a single category based on slug (for updating purpose)
router.get("/admin/category/:slug", readCategory);

//remove category
router.delete("/admin/category/:slug", auth, isAdmin, removeCategory);

//update categories
router.put(
  "/admin/category/:slug",
  auth,
  isAdmin,
  upload.single("file"),
  updateCategory
);

module.exports = router;
