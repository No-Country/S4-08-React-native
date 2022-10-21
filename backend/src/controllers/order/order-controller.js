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

const updateOrder = async (req, res) => {
  //id order
  const { id } = req.params;

  //buscar order por id
  try {
    const Order = await OrderModel.findById(id);
  } catch (error) {
    return res.status(400).send("No Order found");
  }

  //body req con los id de los devs que aceptan/rechazan la orden
  const { devs_ok, devs_not } = req.body;

  //defino propiedades para modificar la order. filtro por id de order, y actualizo devs_ok y devs_not
  const filter = req.params;
  const update = req.body;

  const Order = await OrderModel.findOneAndUpdate(filter, update);
  console.log(Order);

  return res.send("Order updated succesfully");
};

module.exports = { createOrder, updateOrder };
