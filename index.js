require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors());

mongoose.connect(`mongodb://52.29.62.92:27017/cb_main`, {
  useNewUrlParser: true,
});

app.use(express.json());

const services = require("./services/index");

app.use(services);

module.exports = app;
