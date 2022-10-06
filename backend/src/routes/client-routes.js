const { Router } = require("express");
const controllers = require("../controllers");

const clientRoutes = Router();

//new client profile
clientRoutes.post("/register", controllers.authClient.RegisterController);

//login client profile
clientRoutes.post("/login", controllers.authClient.LoginController);

//get All client profiles
clientRoutes.get("/profile", controllers.client.ProfilesController);

//get One client profile
clientRoutes.get("/profile/:id", controllers.client.ProfileController);

//update client profile
clientRoutes.put("/profile/:id", controllers.client.UpdateController);

//delete client profile
clientRoutes.delete("/profile/:id", controllers.client.DeleteController);

module.exports = clientRoutes;