require("dotenv").config();

const express = require("express");
const router = express.Router();

const Color = require("../models/color.js");

router.get("/all", (req, res) => {
  Color.find({})
    .then(response => res.json(response))
    .catch(error => res.status(500).json(error));
});

router.post("/all", (req, res) => {
  const { color } = req.body;

  Color.create({ color: color })
    .then(doc => res.status(200).json(doc))
    .catch(error => res.statut(500).json(error));
});

module.exports = router;
