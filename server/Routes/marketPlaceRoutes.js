const express = require("express");
const router = express.Router();

//middlewares
const { auth, isRecruiter } = require("../Middleware/auth");
const { upload } = require("../Helper/fileupload");

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
router.post("/marketplace/create",  upload.array('files'),createMarketPlaceItem);

//get marketPlace items list
router.get("/marketplace/items", getAllMarketPlaceItems);

//reAD SINGLE ITEM
router.get("/marketplace/:id", readMarketPlaceItem);

//update
router.put("/marketplace/update/:id",  upload.array('files'),updateMarketPlaceItem);

//delete
router.delete(
  "/marketplace/delete/:id",
  deleteMarketPlaceItem
);
module.exports = router;
