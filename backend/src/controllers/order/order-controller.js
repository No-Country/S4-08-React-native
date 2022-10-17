const { ClientModel } = require("../../models/client/client-model");
const { OrderModel } = require("../../models/order/order-model");
const { TeamModel } = require("../../models/team/team-model");

const createOrder = async (req, res) => {
  try {
    const { client, team, description } = req.body;

    if (!client || !team || !description) return res.status(400).send();

    const newOrder = new OrderModel({
      client,
      team,
      description,
    });

    await newOrder.save();

    const Team = await TeamModel.findByIdAndUpdate(
      { _id: team },
      { $push: { orders: newOrder._id } },
      { runValidators: true, returnDocument: "after" }
    ).exec();

    await Team.save();

    const Client = await ClientModel.findByIdAndUpdate(
      { _id: client },
      { $push: { orders: newOrder._id } },
      { runValidators: true, returnDocument: "after" }
    ).exec();

    await Client.save();

    return res.send("Order registered succesfully");
  } catch (error) {
    console.log("error detected");
  }
};

/*
const orderController = async (req, res) => {
  const { id } = req.params;
  try {
    const Teams = await OrderModel.findById(id).populate("orders");
    return res.send(Teams);
  } catch (error) {
    return res.status(400).send("NO Teams found");
  }
};
*/
module.exports = { createOrder };
