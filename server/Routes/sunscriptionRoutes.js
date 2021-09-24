const express = require("express");
const SUBSCRIPTION = require("../Model/subscriptionModel");

const router = express.Router();

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

//create SUBMODEL

router.post("/create-plan", auth, isAdmin, async (req, res) => {
  try {
    const { name, description, perks, price } = req.body;

    const checkItemPresence = await SUBSCRIPTION.findOne({
      planNAme: name,
    }).exec();

    //if item present return
    if (checkItemPresence) return;
    else {
      //create plan entry
      const SaveItem = await new SUBSCRIPTION({
        planName: name,
        planPrice: price,
        perks,
      }).save();

      res.json(SaveItem);
    }
  } catch (err) {
    res.send("err.message");
  }
});

router.post("/edit-plan/:id", auth, isAdmin, async (req, res) => {
  try {
    // do something
    const id = req.params.id;
    const { name, description, perks, price } = req.body;

    const updatedPlan = await SUBSCRIPTION.findOneAndUpdate(
      { _id: id },
      {
        planNAme: name,
        planPrice: price,
        perks,
      },
      { new: true }
    );

    res.json(updatedItem);
    res.send(`${id} updated succesfully `);
  } catch (err) {
    res.send("err.message");
  }
});

router.get("get-plans", async (req, res) => {
  try {
    // do something
    const listAllPlan = await SUBSCRIPTION.find({}).exec();
    res.json(listAllPlan);
  } catch (err) {
    res.send("err.message");
  }
});

router.get("get-plan/:id", async (req, res) => {
  try {
    // do something
    const showPlan = await SUBSCRIPTION.findOne({ _id: req.params.id }).exec();

    res.json(showItem);
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
