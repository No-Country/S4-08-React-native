import { TeamModel } from "../../models/team/team-model.js";

const teamProfilesController = async (req, res) => {
  try {
    const Teams = await TeamModel.find();
    return res.send(Teams);
    
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};

export default teamProfilesController;