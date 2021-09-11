const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

//file system module from node
const fs = require("fs");
const { readdirSync } = fs;

//configure  env files
require("dotenv").config();

//congigure app
const app = express();

//connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Conected"))
  .catch((err) => console.log("DB Connecton Error"));

//middlewares
app.use(cors());
// app.use(bodyParser.json());
const { auth, isAdmin } = require("./Middleware/auth");

// TODO : init a storage engine for multer
const storage = multer.diskStorage({
  destination: "./Uploads/",
  filename: function (req, file, callBack) {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// TODO : upload function
const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 * 1024 * 1024 },
});

//routes
readdirSync("./Routes").map((route) =>
  app.use("/api", require("./Routes/" + route))
);

app.post(
  "/admin/category",

  upload.single("Image"),
  auth,

  isAdmin,

  (req, res) => {
    console.log(req.files);
  }
);

app.listen(process.env.PORT, () => {
  console.log(`App Running on ${process.env.PORT}`);
});
