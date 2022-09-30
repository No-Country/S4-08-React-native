const passport = require("passport");
const bcryptjs = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { DevModel } = require("../../models/dev/dev-model");


passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const dev = await DevModel.findOne({ email });
        if (!dev) {
          return done(null, false, { message: "Dev not found" });
        }

        const checkPassword = await bcryptjs.compare(password, dev.password);
        if (!checkPassword) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, dev, { message: "Login successfull" });
      } catch (error) {
        return done(error);
      }
    }
  )
);
/*
passport.use(new JwtStrategy({
    secretOrKey: "JWT_SECRET",
}))
*/
