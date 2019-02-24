const mongoose = require("mongoose");
const { Schema } = mongoose;

const Color = new Schema({
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Color", Color);
