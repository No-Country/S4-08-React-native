const { TeamModel } = require("../../models/team/team-model");

const teamProfilesController = async (req, res) => {
  try {
    const Teams = await TeamModel.find();
    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

module.exports = { teamProfilesController };