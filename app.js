require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/route/api");
const app = express();
const path = require("path");

//Sequrity Middleware
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xssClean = require("xss-clean");

//database
const mongoose = require("mongoose");

//sequirity middleware implement
app.use(cors());
app.use(rateLimit());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xssClean());

//body parser
app.use(bodyParser.json());

//Rate limiter
const limiter = rateLimit({ windowMs: 15 * 6 * 100, max: 3000 });

// database connection
let URI =
  "mongodb+srv://<username>:<password>@cluster0.kgjk6dy.mongodb.net/CraftShop";
let OPTION = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  autoIndex: true,
};
mongoose
  .connect(URI, OPTION)
  .then(() => {
    console.log("Connection Success");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;
