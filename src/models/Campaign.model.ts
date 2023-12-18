import { Campaign } from "@/types/models";
import { Schema, model, models } from "mongoose";

export const CampaignSchema = new Schema({
  short: { type: String, required: true },
  long: { type: String, required: true },
});

export default models.Admin<Campaign> ||
  model<Campaign>("Admin", CampaignSchema);
