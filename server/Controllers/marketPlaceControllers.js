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
