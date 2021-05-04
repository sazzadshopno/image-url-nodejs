import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  _id: { type: String },
  author: { type: String, required: true },
  nsfw: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  keywords: [{ type: String }],
  content: {
    postHead: mongoose.Schema.Types.Mixed,
    postContents: mongoose.Schema.Types.Mixed,
  },
});

module.exports = mongoose.model("BlogModel", blogSchema);
