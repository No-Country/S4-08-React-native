import { DevModel } from "../../models/dev/dev-model.js";

const devRegisterController = async (req, res) => {
  const { name, email, password, role, avatar, social, info } = req.body;

  if (!name || !email || !password || !role ||!avatar ||!social ||!info ) return res.status(400).send();

  const newDev = new DevModel({
    name,
    email,
    password,
    role,
    avatar,
    social,
    info
  });

  await newDev.save();

  return res.send("Dev registered succesfully");
};

export default devRegisterController;