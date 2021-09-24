const express = require("express");

const router = express.Router();

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

//create SUBMODEL

router.post("/create-plan", auth, isAdmin, async (req, res) => {
  try {
    // do something
  } catch (err) {
    res.send("err.message");
  }
});

router.post("/edit-plan/:id", auth, isAdmin, async (req, res) => {
  try {
    // do something
  } catch (err) {
    res.send("err.message");
  }
});

router.get("get-plans", async (req, res) => {
  try {
    // do something
  } catch (err) {
    res.send("err.message");
  }
});

router.get("get-plan/:id", async (req, res) => {
  try {
    // do something
  } catch (err) {
    res.send("err.message");
  }
});

router.delete("delete-plan/:id", auth, isAdmin, async (req, res) => {
  try {
    // do something
  } catch (err) {
    res.send("err.message");
  }
});

module.exports = router;
