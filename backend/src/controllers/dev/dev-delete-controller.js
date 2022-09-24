import { DevModel } from "../../models/dev/dev-model.js";

const devDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await DevModel.findById(id);

  } catch (error) {
    return res.status(400).send("No Dev found");
  }

  const Devs = await DevModel.findOneAndDelete(id);
  return res.send("Dev deleted succesfully");
};

export default devDeleteController;
