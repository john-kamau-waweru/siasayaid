import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: {type: String, required: true},
    email: { type: String },
    county: { type: String, required: true },
    time: {type: String},
    experience: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
