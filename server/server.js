const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileRoutes = require("./Routes/fileUploadsRoutes");
const path = require("path");

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
app.use(bodyParser.json());

// file uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", fileRoutes.routes);

app.listen(process.env.PORT, () => {
  console.log(`App Running on ${process.env.PORT}`);
});
