const mongoose = require("mongoose");
const { devInfoSchema } = require("../../schemas/dev/dev-info-schema");

const DevSocialModel = mongoose.model("DevSocial", devInfoSchema);

module.exports = { DevSocialModel };
