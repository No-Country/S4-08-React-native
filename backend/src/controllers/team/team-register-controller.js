const { TeamModel } = require("../../models/team/team-model");

const teamRegisterController = async (req, res) => {
  const { name, devs, language, time_zone, isComplete, stack, working } = req.body;

  if (!name || !devs || !language || !time_zone) return res.status(400).send();

  const newTeam = new TeamModel({
    name,
    devs,
    language,
    time_zone,
    isComplete,
    stack,
    working
  });

  await newTeam.save();

  return res.send("Team registered succesfully");
};

module.exports = { teamRegisterController };
