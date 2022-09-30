import { DevModel } from "../../models/dev/dev-model.js";

//get all profiles
export const devProfilesController = async (req, res) => {
  try {
    const Devs = await DevModel.find().populate("team", "-_id");
    return res.send(Devs);
  } catch (error) {
    return res.status(400).send("NO Devs found");
  }
};

//get one profile
export const devProfileController = async (req, res) => {
  const { id } = req.params;

  try {
    const Devs = await DevModel.findById(id);
    return res.send(Devs);
  } catch (error) {
    return res.status(400).send("NO Devs found");
  }
};

//update profile
export const devUpdateController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await DevModel.findById(id);
  } catch (error) {
    return res.status(400).send("No Dev found");
  }

  const { name, email, password, role, avatar, social, info } = req.body;
  if (!name && !email && !password && !role && !avatar && !social && !info)
    return res.status(400).send("Error. empty body request");

  const filter = req.params;
  const update = req.body;

  const Dev = await DevModel.findOneAndUpdate(filter, update);

  return res.send("Dev updated succesfully");
};

//delete profile
export const devDeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await DevModel.findById(id);
  } catch (error) {
    return res.status(400).send("No Dev found");
  }

  const Devs = await DevModel.findOneAndDelete(id);
  return res.send("Dev deleted succesfully");
};
