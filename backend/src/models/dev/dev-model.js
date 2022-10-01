import mongoose from "mongoose";
import { devSchema } from "../../schemas/dev/dev-schema.js";

export const DevModel = mongoose.model("Dev", devSchema);