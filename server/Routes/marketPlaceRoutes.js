const express = require("express");
const router = express.Router();

//middlewares
const { auth, isRecruiter } = require("../Middleware/auth");

//constrollers

//routes
const {
  createMarketPlaceItem,
  getAllMarketPlaceItems,
  readMarketPlaceItem,
  updateMarketPlaceItem,
  deleteMarketPlaceItem,
} = require("../Controllers/marketPlaceControllers");

//create marketplace item
router.post("/marketplace/create", auth, isRecruiter, createMarketPlaceItem);

//get marketPlace items list
router.get("/marketplace/items", getAllMarketPlaceItems);

//reAD SINGLE ITEM
router.get("/marketplace/:id", readMarketPlaceItem);

//update
router.put("/marketplace/update/:id", auth, isRecruiter, updateMarketPlaceItem);

//delete
router.delete(
  "/marketplace/delete/:id",
  auth,
  isRecruiter,
  deleteMarketPlaceItem
);
module.exports = router;
