import express from "express";
import teamProfilesController from "../controllers/team/team-profiles-controller.js";
import teamRegisterController from "../controllers/team/team-register-controller.js";

const teamRoutes = express.Router();

//create team
teamRoutes.post("/register", teamRegisterController);

//get All team profiles
teamRoutes.get("/profile", teamProfilesController);

export default teamRoutes;