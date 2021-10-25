const { default: slugify } = require("slugify");
const SUBCATEGORIES = require("../Model/jobSubCategory");

exports.createSubCategory = async (req, res) => {
  try {
    //get the inputs do something
    console.log("getting req->", req.body);

    //check if req is empty
    if (Object.keys(req.body).length == 0) {
      return;
    }

    const saveSub = await new SUBCATEGORIES({
      title,
      slug: slugify(slug),
      parent,
    }).save();

    res.json(saveSub);
  } catch (err) {
    console.log("Error while creating sub category", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.editSubCategory = async (req, res) => {
  try {
    //get the inputs do something
    const { id } = req.params.id;
    const { title, slug, parent } = req.body;

    const editSub = await SUBCATEGORIES.findByIdAndUpdate(
      id,
      { title, slug: slugify(slug), parent },
      { new: true }
    );
    console.log("Updated:", editSub);

    res.json({ ok: true });
  } catch (err) {
    console.log("Error while editing sub category", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.getSubCategory = async (req, res) => {
  try {
    //get the inputs do something
  } catch (err) {
    console.log("Error while getting sub category", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.getAllSubcategories = async (req, res) => {
  try {
    //get the inputs do something
    // const getAll = await SUBC;
  } catch (err) {
    console.log("Error while getting all sub category", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    //get the inputs do something
  } catch (error) {
    console.log("Error while deleting sub category", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};
