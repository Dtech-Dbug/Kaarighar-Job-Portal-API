const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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
		userCreateIndex: true,
		useFindAndModify: true,
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
