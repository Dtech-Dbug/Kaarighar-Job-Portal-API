const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//configure  env files
require("dotenv").config();

//congigure app
const app = express();

//connect MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		userCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => console.log("DB Conected"))
	.catch((err) => console.log("DB Connecton Error"));

app.listen(process.env.PORT, () => {
	console.log(`App Running on ${process.env.PORT}`);
	console.log(`MONGO URI ON ${process.env.MONGO_URI}`);
});

