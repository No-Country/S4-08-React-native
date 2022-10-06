const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const routers = require("./routes");
const cors = require("cors");

//basic config
dotenv.config();

//start app and define port
const app = express();
const PORT = process.env.PORT;

//middlewares
require("./middlewares/auth/passport.js");
app.use(express.json());
app.use(cors());
app.use(express.text());
app.use("/dev", routers.dev);
app.use("/client", routers.client);
app.use("/team", routers.team);
app.use("/", routers.login);

//test home
app.get("/", (req, res) => {
  res.status(200).send("Working");
});

//start server and DB
const boot = async () => {
  await mongoose.connect(process.env.MONGODB_URI, { dbName: "react-native" });

  app.listen(PORT, () => {
    console.log(
      `Running on http://localhost:${PORT} \nDB connected succesfully`
    );
  });
};

boot();
