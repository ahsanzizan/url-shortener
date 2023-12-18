import { AdminSchema } from "@/models/Admin.model";
import { InferSchemaType, Types } from "mongoose";

type _id = {
  _id: Types.ObjectId;
};

export type Admin = InferSchemaType<typeof AdminSchema> & _id;
