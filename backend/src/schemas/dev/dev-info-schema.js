import mongoose from "mongoose";

export const devInfoSchema = new mongoose.Schema({
    /*language: {
      type: String,
      required: true,
    },*/
    time_availability: {
      type: String,
      required: true,
    },
    time_zone: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  }, {collection: false});