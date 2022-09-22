import express from "express";
import devProfileController from "../controllers/dev-profile-controller.js";
import devRegisterController from "../controllers/dev-register-controller.js";

const devRoutes = express.Router();

devRoutes.post("/register", devRegisterController);

devRoutes.get("/profile", devProfileController);

export default devRoutes;