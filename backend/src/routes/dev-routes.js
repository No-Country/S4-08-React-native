import express from "express";
import { devRegisterController, devLoginController } from "../controllers/dev/dev-auth-controller.js";
import { devProfilesController, devProfileController, devUpdateController, devDeleteController } from "../controllers/dev/dev-controller.js"


const devRoutes = express.Router();

//new Dev profile
devRoutes.post("/register", devRegisterController);

//login dev profile
devRoutes.post("/login", devLoginController);

//get All dev profiles
devRoutes.get("/profile", devProfilesController);

//get One dev profile
devRoutes.get("/profile/:id", devProfileController);

//update dev profile
devRoutes.put("/profile/:id", devUpdateController);

//delete dev profile
devRoutes.delete("/profile/:id", devDeleteController);

export default devRoutes;