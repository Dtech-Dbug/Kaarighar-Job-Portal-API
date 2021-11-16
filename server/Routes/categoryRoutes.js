const express = require("express");
const multer = require("multer");
const path = require("path");

// TODO : init a storage engine for multer
const storage = multer.diskStorage({
  destination: "./Uploads/",
  filename: function (req, file, callBack) {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// TODO : upload function
const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 * 1024 * 1024 },
});

const uploadMulter = upload.single("image");

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

const router = express.Router();

// CRUD FOR CATEGROIES
// create category route
router.post(
  "/admin/category",
  auth,
  isAdmin,
  upload.single("file"),
  createCategory
);

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
