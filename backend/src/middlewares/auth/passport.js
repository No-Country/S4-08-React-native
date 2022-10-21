const passport = require('passport');
const bcryptjs = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { DevModel } = require('../../models/dev/dev-model');
const { ClientModel } = require('../../models/client/client-model');
const dotenv = require('dotenv');
dotenv.config();

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        let user = await DevModel.findOne({ email });

        if (!user) {
          user = await ClientModel.findOne({ email });
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
          if (user.orders.length > 0){
            await user.populate('orders')
          }
        }

        const checkPasswordUser = await bcryptjs.compare(
          password,
          user.password
        );

        if (!checkPasswordUser) {
          return done(null, false, { message: 'Wrong password' });
        }

        return done(null, user, { message: 'Login successfull' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (err) {
        return next(err);
      }
    }
  )
);

const validateToken = passport.authenticate("jwt", { session: false });

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

module.exports = { validateToken };
