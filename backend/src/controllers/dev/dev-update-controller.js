import { DevModel } from "../../models/dev/dev-model.js";

const devUpdateController = async (req, res) => {
  const { id } = req.params;
  
  try {
    const data = await DevModel.findById(id);
    
  } catch (error) {
    return res.status(400).send("No Dev found");
  };
  
  const { name, email, password, role, avatar, social, info } = req.body;
  if (!name && !email && !password && !role && !avatar && !social && !info)
    return res.status(400).send("Error. empty body request");

  const filter = req.params;
  const update = req.body;

  const Dev = await DevModel.findOneAndUpdate(filter, update);

  return res.send("Dev updated succesfully");
};

export default devUpdateController;
