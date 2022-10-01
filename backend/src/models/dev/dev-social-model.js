import mongoose from "mongoose";
import { devSocialSchema } from "../../schemas/dev/dev-social-schema.js";

export const DevSocialModel = mongoose.model("DevSocial", devSocialSchema);