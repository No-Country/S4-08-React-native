import mongoose from "mongoose";

export const devSocialSchema = new mongoose.Schema({
    linkedin: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  }, {collection: false});