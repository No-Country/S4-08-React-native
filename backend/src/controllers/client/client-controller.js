const { ClientModel } = require("../../models/client/client-model");

//get all profiles
const ProfilesController = async (req, res) => {
  try {
    const Clients = await ClientModel.find().populate("team", "-_id");
    return res.send(Clients);
  } catch (error) {
    return res.status(400).send("No clients found");
  }
};

//get one profile
const ProfileController = async (req, res) => {
  const { id } = req.params;

  try {
    const Client = await ClientModel.findById(id);
    return res.send(Client);
  } catch (error) {
    return res.status(400).send("NO Client found");
  }
};

//update profile
const UpdateController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ClientModel.findById(id);
  } catch (error) {
    return res.status(400).send("No Client found");
  }

  const { name, email, password, role, avatar, social, info } = req.body;
  if (!name && !email && !password && !role && !avatar && !social && !info)
    return res.status(400).send("Error. empty body request");

  const filter = req.params;
  const update = req.body;

  const Client = await ClientModel.findOneAndUpdate(filter, update);

  return res.send("Client updated succesfully");
};

//delete profile
const DeleteController = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ClientModel.findById(id);
  } catch (error) {
    return res.status(400).send("No Dev found");
  }

  const Devs = await DevModel.findOneAndDelete(id);
  return res.send("Client deleted succesfully");
};

module.exports = {
  ProfilesController,
  ProfileController,
  UpdateController,
  DeleteController
};
