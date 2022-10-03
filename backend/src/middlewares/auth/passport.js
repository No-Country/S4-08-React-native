const passport = require("passport");
const bcryptjs = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { DevModel } = require("../../models/dev/dev-model");
const { ClientModel } = require("../../models/client/client-model");



passport.use(
  "loginDev",
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

        const checkPasswordDev = await bcryptjs.compare(password, dev.password);
        
        if (!checkPasswordDev) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, dev , { message: "Login successfull" });
      
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "loginClient",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        
        const client = await ClientModel.findOne({ email });
        if (!client) {
          return done(null, false, { message: "Client not found" });
        }

        
        const checkPasswordClient = await bcryptjs.compare(password, client.password);
        if ( !checkPasswordClient) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, client , { message: "Login successfull" });
      
      } catch (error) {
        return done(error);
      }
    }
  )
);

//refactorizar codigo

/*
passport.use(new JWTStrategy({ 
    secretOrKey: "JWT_SECRET",
    jwtFromRequest: ExtractJWT.fromAuthHeader("SECRET_TOKEN")
}, async (token, done) => {
  try {
    return done(null, token.user)
  } catch (err) {
    return next(err)
  }
}
))
*/