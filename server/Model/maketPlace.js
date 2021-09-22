const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const marketPlaceSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: ["3", "Too Short"],
      text: true,
    },
    description: {
      type: String,
      trim: true,
      minLength: ["3", "Too Short"],
      text: true,
    },
    price: {
      type: Number,
    },
    images: [Object],
    recruiter: {
      type: ObjectId,
      ref: "USER",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MARKET", marketPlaceSchema);
