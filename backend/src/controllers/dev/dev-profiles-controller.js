import { DevModel } from "../../models/dev/dev-model.js";

const devProfilesController = async (req, res) => {
  try {
    const Devs = await DevModel.find().populate("team", "-_id");
    return res.send(Devs);
    
  } catch (error) {
    return res.status(400).send("NO Devs found");
  }
};

export default devProfilesController;
