import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  website: String,
  preview: String,
});

export default mongoose.models.MiniProject ||
  mongoose.model("MiniProject", schema);
