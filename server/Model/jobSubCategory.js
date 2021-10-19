const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

//text field to be able to search the categories by text in the future

const subCategoriesSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: ["3", "Too Short"],
      text: true,
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
      text: true,
    },

    parent: {
      type: ObjectId,
      ref: "CATEGORIES",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SUBCATEGORIES", subCategoriesSchema);
