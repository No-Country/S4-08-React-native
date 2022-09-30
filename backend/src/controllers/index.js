const authDev = require("./dev/dev-auth-controller");
const dev = require("./dev/dev-controller");
const authTeam = require("./team/team-register-controller");
const team = require("./team/team-profiles-controller");

module.exports = { authDev, dev, authTeam, team };
