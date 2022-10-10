const { Router } = require("express");
const controllers = require("../controllers");

const loginRoutes = Router();

//dev login
loginRoutes.post("/login", controllers.authDev.LoginController);

//client register
loginRoutes.post("/login", controllers.authClient.LoginController);

module.exports = loginRoutes;