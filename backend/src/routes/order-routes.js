const { Router } = require("express");
const controllers = require("../controllers");
//const { validateToken } = require("../middlewares/auth/passport");

const orderRoutes = Router();

//create new order
orderRoutes.post("/new", controllers.order.createOrder);

//get All orders profiles
//orderRoutes.get("/profile", validateToken, );

//get order profile by ID
//orderRoutes.get("/:id", validateToken, );


module.exports =  orderRoutes;