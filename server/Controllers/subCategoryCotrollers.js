//controllers
// const {
//   createSubCategory,
//   editSubCategory,
//   getAllSubcategories,
//   getSubCategory,
//   deleteSubCategory,
// } = require("../Controllers/subCategoryControllers");

const SUBCATEGORIES = require("../Model/jobSubCategory");

exports.createSubCategory = async (req, res) => {
  try {
    //get the inputs do something
  } catch (error) {
    console.log("error while creating sub", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.editSubCategory = async (req, res) => {
  try {
    //get the inputs do something
  } catch (error) {
    console.log("error while editing sub", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.getAllSubcategories = async (req, res) => {
  try {
    //get the inputs do something
  } catch (error) {
    console.log("error while getting sub", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    //get the inputs do something
  } catch (error) {
    console.log("error while deleting sub", err.message);
    res.status(400).send({
      err: error.message,
    });
  }
};
