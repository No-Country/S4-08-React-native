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
  isDev: {
    type: Boolean,
    default: true,
  },
  //validar si dev pertenece a un equipo actualmente
  currentTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    require: false,
  },
  //test! equipos a los que anteriormente pertenecio
  oldTeams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    require: false,
  }]
});

module.exports = { devSchema };
