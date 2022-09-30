const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSocialSchema = new Schema(
  {
    linkedin: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
  { collection: false }
);

module.exports = { devSocialSchema };
