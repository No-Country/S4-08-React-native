const { Router } = require("express");
const controllers = require("../controllers");

const devRoutes = Router();

//new Dev profile
devRoutes.post("/register", controllers.authDev.RegisterController);

//login dev profile
devRoutes.post("/login", controllers.authDev.LoginController);

//get All dev profiles
devRoutes.get("/profile", controllers.dev.ProfilesController);

//get One dev profile
devRoutes.get("/profile/:id", controllers.dev.ProfileController);

//update dev profile
devRoutes.put("/profile/:id", controllers.dev.UpdateController);

//delete dev profile
devRoutes.delete("/profile/:id", controllers.dev.DeleteController);

module.exports = devRoutes;
