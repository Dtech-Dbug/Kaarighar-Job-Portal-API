const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//file system module from node
const fs = require("fs");
const { readdirSync } = fs;

//configure  env files
require("dotenv").config();

const multer = require("multer");
const path = require("path");

// TODO : init a storage engine for multer
const storage = multer.diskStorage({
  destination: "./Uploads",
  filename: function (req, file, callBack) {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//congigure app
const app = express();

//connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Conected"))
  .catch((err) => console.log("DB Connecton Error"));

//middlewares
app.use(cors());
app.use(bodyParser.json());

//routes
readdirSync("./Routes").map((route) =>
  app.use("/api", require("./Routes/" + route))
);

app.listen(process.env.PORT, () => {
  console.log(`App Running on ${process.env.PORT}`);
  console.log(`MONGO URI ON ${process.env.MONGO_URI}`);
});
