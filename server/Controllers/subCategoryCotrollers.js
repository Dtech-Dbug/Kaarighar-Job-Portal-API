const { default: slugify } = require("slugify");
const SUBCATEGORIES = require("../Model/jobSubCategory");
const CATEGORIES = require("../Model/jobCategories");

exports.createSubCategory = async (req, res) => {
  try {
    //get the inputs do something
    console.log("getting req->", req.body);
    const { title, parent } = req.body;
    const saveSub = await new SUBCATEGORIES({
      title,
      slug: slugify(title),
      parent,
    }).save();

    res.json({
      message: "Sub Category Created Successfully",
      saveSub,
    });
  } catch (err) {
    console.log("Error while creating sub category", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
};

// edit sub category
exports.editSubCategory = async (req, res) => {
  try {
    const { title, parent } = req.body;
    const { id } = req.params;
    const updateSub = await SUBCATEGORIES.findByIdAndUpdate(
      id,
      {
        title,
        slug: slugify(title),
        parent,
      },
      { new: true }
    );
    res.json({
      message: "Updated Successfully",
      updateSub,
    });
  } catch (err) {
    console.log("Error while editing sub category", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
};

// get sub category by id
exports.getSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SUBCATEGORIES.findById(id);
    res.json(subCategory);
  } catch (err) {
    console.log("Error while getting sub category by id", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
};


// get sub categories by parent category using slug
exports.getSubCategoriesByParent = async (req, res) => {
  try {
    //get the inputs do something
   
  } catch (err) {
    console.log("Error while getting sub category", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
};

exports.getAllSubcategories = async (req, res) => {
  try {
    //get the inputs do something
    const getAll = await SUBCATEGORIES.find({})
      .populate("parent", "title")
      .exec();

    res.json(getAll);
  } catch (err) {
    console.log("Error while getting all sub category", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
};


// delete sub category
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSub = await SUBCATEGORIES.findByIdAndDelete(id);
    res.json({
      message: "Deleted Successfully",
      deleteSub,
    });
    } catch (err) {
    console.log("Error while deleting sub category", err.message);
    res.status(400).send({
      err: err.message,
    });
  }
}
