const { Router } = require("express");
const controllers = require("../controllers");

const teamRoutes = Router();

//create team
teamRoutes.post("/register", controllers.authTeam.teamRegisterController);

//get All team profiles
teamRoutes.get("/profile", controllers.team.teamProfilesController);

//get team profile by ID
teamRoutes.get("/profile/:id", controllers.team.teamProfileController);


module.exports =  teamRoutes;
