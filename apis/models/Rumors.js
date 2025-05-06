const mongoose = require("mongoose");

const RumourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  sign: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  zone: {
    type: String,
  },
  woreda: {
    type: String,
    default: "Tabor",
  },
  kebele: {
    type: String,
  },
  number_of_case: {
    type: Number,
    require: true,
  },
  number_of_death: {
    type: Number,
    require: true,
  },
  reporting_date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Rumours", RumourSchema);
