const { Router } = require("express");
const controllers = require("../controllers");

const devRoutes = Router();

//new Dev profile
devRoutes.post("/register", controllers.authDev.devRegisterController);

//login dev profile
devRoutes.post("/login", controllers.authDev.devLoginController);

//get All dev profiles
devRoutes.get("/profile", controllers.dev.devProfilesController);

//get One dev profile
devRoutes.get("/profile/:id", controllers.dev.devProfileController);

//update dev profile
devRoutes.put("/profile/:id", controllers.dev.devUpdateController);

//delete dev profile
devRoutes.delete("/profile/:id", controllers.dev.devDeleteController);

module.exports =  devRoutes;
