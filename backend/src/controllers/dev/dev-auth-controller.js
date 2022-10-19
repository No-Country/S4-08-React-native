const passport = require("passport");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { DevModel } = require("../../models/dev/dev-model");
const teamsIncomplete = require("../../utils/algorithm");

//testing cloudinary config
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//register
const RegisterController = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
      role,
      avatar,
      social,
      info,
      //oldTeams,
    } = req.body;

    if (!surname || !role || !social || !info)
      return res.status(400).send("Missing fields");

    const checkEmail = await DevModel.find({ email: email });
    if (checkEmail) return res.status(400).send("Email is already registered");

    //hashear password
    const hashPassword = await bcryptjs.hash(password, 8);


    //upload a cloudinary
    const resCloudinary = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "test_folder",
      //allowed_formats: ["jpeg", "png"],
      format: "png"
      
    });

    //guardar dev registrado
    const newDev = new DevModel({
      name,
      surname,
      email,
      password: hashPassword,
      role,
      avatar: resCloudinary.url,
      social,
      info,
      //oldTeams,
    });

  
    //guardar dev en BBDD
    const dev = await newDev.save();

    //eliminar la foto avatar guardada en mi servidor node
    await fs.unlink(req.file.path);

    //ALGORITMO que asigna dev a un team
    const assignTeam = await teamsIncomplete(dev);

    try {
      dev.currentTeam = assignTeam;
      await dev.save();
    } catch (error) {
      console.log(error);
    }

    //datos a encriptar con jwt
    const body = {
      _id: dev._id,
      email: dev.email,
      role: dev.role,
    };

    const token = jwt.sign({ dev: body }, process.env.JWT_SECRET, {
      expiresIn: "45m",
    });

    return res.send({
      message: "Dev registered succesfully",
      token: "Bearer" + " " + token,
      dev,
    });
  } catch (error) {
    return res.status(400).send("Error in register");
  }
};

//login
const LoginController = async (req, res, next) => {
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

        const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
          expiresIn: "45m",
        });
        res.json({
          message: info.message,
          token: "Bearer" + " " + token,
          user,
        });
      });
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
};

module.exports = { RegisterController, LoginController };
