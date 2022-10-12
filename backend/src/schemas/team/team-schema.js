const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  devs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dev",
      require: false,
    },
  ],
  language: {
    type: Array,
  },
  stack: {
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  time_zone: {
    type: Array,
    required: true,
  },
  working: {
    type: Boolean,
  },
  availability: {
    type: String,
  },
});

module.exports = { teamSchema };
