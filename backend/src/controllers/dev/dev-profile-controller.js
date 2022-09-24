import { DevModel } from "../../models/dev/dev-model.js";

const devProfileController = async (req, res) => {
  const { id } = req.params;

  try {
    const Devs = await DevModel.findById(id);
    return res.send(Devs);
  
  } catch (error) {
    return res.status(400).send("NO Devs found");
  }
};

export default devProfileController;
