const express = require("express");

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
  getUsersAllAddress,
  getUserAddress,
  addUserAddress,
  deleteUserAddress,
} = require("../Controllers/user");

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", auth, getCurrentUser);

router.get("/user/:id", auth, isAdmin, getUserByID);

router.get("/users", auth, getUsers);

router.get("/admin", auth, isAdmin, getAdmin);

router.post("/admin/verifyuser", auth, isAdmin, verifyUsers);

router.post("/forgot-password", resetPassword);

router.post("/user/edit-profile", auth, setUpUserProfile);

router.post("/u/address", auth, addUserAddress);

router.get("/u/addresses",auth,getUsersAllAddress);

router.get("/u/address/:addressId",auth,getUserAddress);

router.delete("/u/address/:addressId", auth, deleteUserAddress);

module.exports = router;