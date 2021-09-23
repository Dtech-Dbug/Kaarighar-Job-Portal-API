const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose;

const { ObjectId } = mongoose;

const subscriptionModel = Schema({
  name: {
    type: String,
    text: true,
    trim: true,
  },

  plan: String,

  price: {
    type: Number,
  },

  perks: {
    type: text,
    minLength: [5, "Too Short"],
  },
});

module.exports = mongoose.model("SUBSCRIPTION", subscriptionModel);
