import DevModel from "../schemas/dev-schema.js";

const devRegisterController = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) return res.status(400).send();

  const newDev = new DevModel({
    name,
    email,
    password,
    role
  });

  await newDev.save();

  return res.send("Dev registered succesfully");
};

export default devRegisterController;