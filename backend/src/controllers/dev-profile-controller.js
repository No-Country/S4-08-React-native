import DevModel from "../schemas/dev-schema.js";

const devProfileController = async (req, res) => {
  const Devs = await DevModel.find();

  if (!Devs) return res.status(400).send("NO Devs found");

  return res.send(Devs);
};

export default devProfileController;
