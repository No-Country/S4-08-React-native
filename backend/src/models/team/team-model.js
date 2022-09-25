import mongoose from "mongoose";
import { teamSchema } from "../../schemas/team/team-schema.js";

export const TeamModel = mongoose.model("Team", teamSchema);