import passport from "passport";
import { Strategy } from "passport-local";

import bcryptjs from "bcryptjs";
import { DevModel } from "../../models/dev/dev-model.js";

passport.use(
  "login",
  new Strategy(
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

passport.use(new JwtStrategy({
    secretOrK
}))
