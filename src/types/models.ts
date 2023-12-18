import { AdminSchema } from "@/models/Admin.model";
import { CampaignSchema } from "@/models/Campaign.model";
import { InferSchemaType, Types } from "mongoose";

type _id = {
  _id: Types.ObjectId;
};

export type Admin = InferSchemaType<typeof AdminSchema> & _id;
export type Campaign = InferSchemaType<typeof CampaignSchema> & _id;
