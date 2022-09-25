import mongoose from "mongoose";
import { devInfoSchema } from "./dev-info-schema.js";
import { devSocialSchema } from "./dev-social-schema.js";

export const devSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  social: devSocialSchema,
  info: devInfoSchema,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  
});
