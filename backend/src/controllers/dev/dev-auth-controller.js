import { DevModel } from "../../models/dev/dev-model.js";
import passport from "passport";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//register
export const devRegisterController = async (req, res) => {
  const { name, email, password, role, avatar, social, info, team } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !role ||
    !avatar ||
    !social ||
    !info ||
    !team
  )
    return res.status(400).send();

  const hashPassword = await bcryptjs.hash(password, 8);

  const newDev = new DevModel({
    name,
    email,
    password: hashPassword,
    role,
    avatar,
    social,
    info,
    team,
  });

  await newDev.save();

  return res.send("Dev registered succesfully");
};

//login
export const devLoginController = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
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

        const token = jwt.sign({ user: body }, "JWT_SECRET", { expiresIn: "45m" });
        res.json({ message: info.message, token });
      });
    } catch (err) {
      return next(err);
    }
  })(req, res, next);

  /* const { email, password } = req.body;
  
    if (!email || !password ) return res.status(400).send();


    const devEmail = await DevModel.findOne({email}).exec();

    if(!devEmail) return res.status(401).send("email is not registered");

    const checkPassword = await bcryptjs.compare(password, devEmail.password);

    if(!checkPassword) return res.status(401).send("try again. wrong password");

    return res.send(`Welcome ${devEmail.name}`);
    */

  //generar TOken
};
