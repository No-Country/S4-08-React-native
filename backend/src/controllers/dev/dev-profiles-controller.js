import { DevModel } from "../../models/dev/dev-model.js";

const devProfilesController = async (req, res) => {
  try {
    const Devs = await DevModel.find();
    return res.send(Devs);
    
  } catch (error) {
    return res.status(400).send("NO Devs found");
  }
};

export default devProfilesController;
