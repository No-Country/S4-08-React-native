import mongoose from "mongoose";

const DevSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
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
    required: true
  }
});

const DevModel = mongoose.model("Dev", DevSchema);

export default DevModel;
