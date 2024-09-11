import { KeyPoint } from "@/utils/services";
import { Document, Schema, model } from "mongoose";

interface IService extends Document {
  title: string;
  image: string;
  summary: string;
  description: string;
  keyPoint: KeyPoint[];
}

const serviceSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your title"],
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    summary: {
      type: String,
      required: [true, "Please provide your summary"],
      maxLength: 30,
    },
    description: {
      type: String,
      required: [true, "Please provide your description"],
      maxLength: 30,
    },
    keyPoint: {
      type: Array,
      required: [true, "Please provide key points"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

export default model<IService>("Service", serviceSchema);
