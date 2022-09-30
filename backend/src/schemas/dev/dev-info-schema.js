const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devInfoSchema = new Schema(
  {
    /*language: {
      type: String,
      required: true,
    },*/
    time_availability: {
      type: String,
      required: true,
    },
    time_zone: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  { collection: false }
);

module.exports = { devInfoSchema };
