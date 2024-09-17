import mongoose, { Document, Schema, model, models } from "mongoose";
import slugify from "slugify";

interface KeyPoint {
  title: string;
  point: string;
}

interface IService extends Document {
  title: string;
  slug: string;
  image: string;
  summary: string;
  description: string;
  keyPoint: KeyPoint[]; // Array of KeyPoint objects
}

const keyPointSchema: Schema = new Schema({
  title: { type: String, required: true },
  point: { type: String, required: true },
});

const serviceSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your title"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true, // Ensure slugs are unique
    },
    image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    summary: {
      type: String,
      required: [true, "Please provide your summary"],
    },
    description: {
      type: String,
      required: [true, "Please provide your description"],
    },
    keyPoint: {
      type: [keyPointSchema],
      required: "Please provide the key points",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

serviceSchema.pre<IService>("save", function (next) {
  if (this.isModified("title") || this.isNew) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Check if model already exists, otherwise create it
const Service = models.Service || model<IService>("Service", serviceSchema);

export default Service;
