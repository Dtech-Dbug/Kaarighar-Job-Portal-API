const Market = require("../Model/maketPlace");

//  createMarketPlaceItem, getAllMarketPlaceItems,readMarketPlaceItem, updateMarketPlaceItem,  deleteMarketPlaceItem

exports.createMarketPlaceItem = async (req, res) => {
  try {
    const { name, description, recruiter } = req.body;

    const createNewItem = new Market({
      name,
      description,
      recruiter,
    })
      .populate(
        "recruiter",
        "_id firstName lastName email mobileNumber company address"
      )
      .exec();

    res.json(createNewItem);
  } catch (err) {
    console.log("Err while creating item", err.message);
  }
};

exports.getAllMarketPlaceItems = async (req, res) => {
  try {
    const getAllItems = await Market.find({})
      .populate(
        "recruiter",
        "_id firstName lastName email mobileNumber company address"
      )
      .exec();

    res.json(getAllItems);
  } catch (err) {
    console.log("fetching item ->", err.message);
  }
};

exports.readMarketPlaceItem = async (req, res) => {
  try {
    const { id } = req.params;

    const readJob = await Market.findById({ _id: id })
      .populate(
        "recruiter",
        "_id firstName lastName email mobileNumber company address"
      )
      .exec();

    res.json(readJob);
  } catch (err) {
    console.log("Err while reading a item->", err.message);
  }
};

exports.updateMarketPlaceItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedItem = await Market.findOneAndUpdate(
      { Id: id },
      { name, description },
      { new: true }
    ).exec();

    res.json(updatedItem);
  } catch (err) {
    console.log("err wjile updating item-->", err.message);
  }
};
