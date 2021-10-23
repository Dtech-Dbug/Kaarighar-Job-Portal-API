const SUBCATEGORIES = require("../Model/jobSubCategory");

exports.createSubCategory = async (req, res) => {
  try {
    //get the inputs do something
    console.log("getting req->", req.body);
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
