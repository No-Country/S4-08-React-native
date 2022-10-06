const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { devInfoSchema } = require("./dev-info-schema");
const { devSocialSchema } = require("./dev-social-schema");

const devSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  },
  social: devSocialSchema,
  info: devInfoSchema,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    require: false,
  },
});

module.exports = { devSchema };
