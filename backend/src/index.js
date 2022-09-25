import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import devRoutes from "./routes/dev-routes.js";
import teamRoutes from "./routes/team-routes.js";

//basic config
dotenv.config();

//start app and define port
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.text());
app.use("/dev", devRoutes);
app.use("/team", teamRoutes);

//test home
app.get("/", (req, res) => {
  res.status(200).send("Working");
});

//start server and DB
const boot = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {dbName: "react-native"});

  app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT} \nDB connected succesfully`);
  });
};

boot();