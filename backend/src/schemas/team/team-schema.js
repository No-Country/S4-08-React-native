const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  devs: {
    type: Array,
    required: true,
  },
});

module.exports = { teamSchema };

//introducir algoritmo y agregar devs en este filtro?