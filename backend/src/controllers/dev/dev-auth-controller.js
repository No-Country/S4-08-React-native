const passport = require("passport");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { DevModel } = require("../../models/dev/dev-model");

//register
const RegisterController = async (req, res) => {
  const { name, surname, email, password, role, avatar, social, info, team } =
    req.body;

  if (!name || !surname || !email || !password || !role || !social || !info)
    //asignar team random con query a la bbdd. crear funcion

    return res.status(400).send();

  const hashPassword = await bcryptjs.hash(password, 8);

  const newDev = new DevModel({
    name,
    surname,
    email,
    password: hashPassword,
    role,
    avatar,
    social,
    info,
    team,
  });

  const dev = await newDev.save();

  return res.json({ msg:"Dev registered succesfully", dev});
};

//login
const LoginController = async (req, res, next) => {
  passport.authenticate("loginDev", async (err, user, info) => {
    try {
      if (!user) {
        return res.status(404).json(info);
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);

        //datos a encriptar con jwt
        const body = {
          _id: user._id,
          email: user.email,
        };

        const token = jwt.sign({ user: body }, "JWT_SECRET", {
          expiresIn: "45m",
        });
        res.json({ message: info.message, token, user });
      });
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
};

module.exports = { RegisterController, LoginController };
