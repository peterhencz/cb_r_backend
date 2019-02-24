require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors());

mongoose.connect(`${process.env.DB_URL}`, {
  useNewUrlParser: true,
});

app.use(express.json());

const services = require("./services/index");

app.use(services);

module.exports = app;
