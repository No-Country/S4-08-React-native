import { TeamModel } from "../../models/team/team-model.js";

const teamRegisterController = async (req, res) => {
    const { name } = req.body;
  
    if (!name) return res.status(400).send();
  
    const newTeam = new TeamModel({
      name
    });
  
    await newTeam.save();
  
    return res.send("Team registered succesfully");
  };
  
  export default teamRegisterController;