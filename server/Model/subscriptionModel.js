const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose;

const { ObjectId } = mongoose;

const subscriptionModel = Schema({
  planName:{ 
    type: String,
    text: true,
    trim: true,
  },

  planPrice:{
    type: Number,
  },

  planType:{
    type: String,
  },

  purchaseDate:{
      type: Date,
  },

  nextPurchaseDate:{
      type: Date,
  },

  isPaid:{
    type: Boolean
  },

  seller: {
			type: ObjectId,
			ref: 'USER',
	},

  perks: {
    type: text,
    minLength: [5, "Too Short"],
  },
});

module.exports = mongoose.model("SUBSCRIPTION", subscriptionModel);
