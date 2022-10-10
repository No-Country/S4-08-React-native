const { Router } = require("express");
const controllers = require("../controllers");
const { validateToken } = require("../middlewares/auth/passport");

const clientRoutes = Router();

//new client profile
clientRoutes.post("/register", controllers.authClient.RegisterController);

//login client profile
//clientRoutes.post("/login", controllers.authClient.LoginController);

//get All client profiles
clientRoutes.get("/profile", validateToken, controllers.client.ProfilesController);

//get One client profile
clientRoutes.get("/profile/:id", validateToken, controllers.client.ProfileController);

//update client profile
clientRoutes.put("/profile/:id", validateToken, controllers.client.UpdateController);

//delete client profile
clientRoutes.delete("/profile/:id", validateToken, controllers.client.DeleteController);

module.exports = clientRoutes;