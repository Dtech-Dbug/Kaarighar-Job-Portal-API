const express = require("express");
const SUBSCRIPTION = require("../Model/subscriptionModel");

const router = express.Router();

//middlewares
const { auth, isAdmin } = require("../Middleware/auth");

//create SUBMODEL

router.post("/plan/create", async (req, res) => {
  try {
    const { planName, perks, planPrice } = req.body;
    console.log(req.body);

    // uncomment this with some other logic this is not working
    // const checkItemPresence = await SUBSCRIPTION.findOne({
    //   planName: name,
    // }).exec();

    // //if item present return
    // if (checkItemPresence) return;
    // else {
    //   create plan entry
    const SaveItem = await new SUBSCRIPTION({
        planName,
        planPrice,
        perks,
    }).save();

    res.status(200).json(SaveItem);
    // }
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/plan/edit/:id", async (req, res) => {
  try {
    // do something
    const id = req.params.id;
    const { planName, perks, planPrice } = req.body;

    console.log(req.body);
    const updatedPlan = await SUBSCRIPTION.findOneAndUpdate(
      { _id: id },
      {
        planName,
        planPrice,
        perks,
      },
      { new: true }
    );

    res.json(updatedPlan);
    res.send(`${id} updated succesfully `);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/plan/all", async (req, res) => {
  try {
    // do something
    const listAllPlan = await SUBSCRIPTION.find().exec();
    res.json(listAllPlan);
  } catch (err) {
    res.send("err.message");
  }
});

router.get("/plan/:id", async (req, res) => {
  try {
    // do something
    const showPlan = await SUBSCRIPTION.findOne({ _id: req.params.id }).exec();

    res.json(showPlan);
  } catch (err) {
    res.send("err.message",err);
  }
});

router.delete("/plan/delete/:id", async (req, res) => {
  try {
    // do something
    console.log(req.params.id);

    const deletePlan = await SUBSCRIPTION.findOneAndDelete({
      _id: req.params.id,
    }).exec();

    res.send(`${req.params.id} deleted succesfully`);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

module.exports = router;
