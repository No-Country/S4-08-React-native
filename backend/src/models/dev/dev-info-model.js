import mongoose from "mongoose";
import { devInfoSchema } from "../../schemas/dev/dev-info-schema.js";

export const DevSocialModel = mongoose.model("DevSocial", devInfoSchema);