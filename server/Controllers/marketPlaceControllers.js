const Market = require("../Model/maketPlace");

//  createMarketPlaceItem, getAllMarketPlaceItems,readMarketPlaceItem, updateMarketPlaceItem,  deleteMarketPlaceItem

exports.createMarketPlaceItem = async (req, res) => {
  try {
    let filesArray = [];
    // req.files.forEach((element) => {
    //   const file = {
    //     fileName: element.originalname,
    //     filePath: element.path,
    //     fileType: element.mimetype,
    //     fileSize: element.size,
    //   };
    //   filesArray.push(file);
    // });

    const { name, description, recruiter } = req.body;

    const createNewItem = new Market({
      name,
      description,
      recruiter,
      // images: filesArray,
    });

    await createNewItem.save();
    console.log(createNewItem);
    res.status(201).send("Item Added Successfully");
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
    let filesArray = [];

    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size,
      };
      filesArray.push(file);
    });

    const updatedItem = await Market.findOneAndUpdate(
      { _id: id },
      {
        name,
        description,
        images: filesArray,
      },
      { new: true }
    ).exec();
    res.json({ updated: true });
  } catch (err) {
    console.log("err while updating item-->", err.message);
  }
};

exports.deleteMarketPlaceItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Market.findOneAndDelete({ _id: id }).exec();

    res.json({ deletedItem, ok: true });
  } catch (err) {
    console.log("err while deleting->", err.message);
  }
};
