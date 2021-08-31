const express = require("express");

const multer = require("multer");
const path = require("path");

// TODO : init a storage engine for multer
const storage = multer.diskStorage({
  destination: "./Uploads",
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
}).single("userImageDetails");

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

const router = express.Router();

//controllers
const {
  registerUser,
  loginUser,
  getCurrentUser,
  getUserByID,
  getUsers,
  getAdmin,
  verifyUsers,
  resetPassword,
  setUpUserProfile,
} = require("../Controllers/user");

//routes
router.post("/register", upload, registerUser);
router.post("/login", loginUser);

//get users
router.get("/me", auth, getCurrentUser);
router.get("/user/:id", auth, isAdmin, getUserByID);
router.get("/users", auth, getUsers);

//admin
router.get("/admin", auth, isAdmin, getAdmin);

//verifying users(recruiters)
//only performed by admin so we pass both auth and isAdmin middleware
router.post("/admin/verifyuser", auth, isAdmin, verifyUsers);

//forgor password route for all users
router.post("/forgot-password/", resetPassword);

//set profile
router.post("/user/edit-profile", auth, setUpUserProfile);
module.exports = router;
