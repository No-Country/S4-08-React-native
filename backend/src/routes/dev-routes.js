import express from "express";
import devRegisterController from "../controllers/dev/dev-register-controller.js";
import devProfilesController from "../controllers/dev/dev-profiles-controller.js"
import devProfileController from "../controllers/dev/dev-profile-controller.js";
import devUpdateController from "../controllers/dev/dev-update-controller.js";
import devDeleteController from "../controllers/dev/dev-delete-controller.js";


const devRoutes = express.Router();

//new Dev profile
devRoutes.post("/register", devRegisterController);

//get All dev profiles
devRoutes.get("/profile", devProfilesController);

//get One dev profile
devRoutes.get("/profile/:id", devProfileController);

//update dev profile
devRoutes.put("/profile/:id", devUpdateController);

//delete dev profile
devRoutes.delete("/profile/:id", devDeleteController);

export default devRoutes;