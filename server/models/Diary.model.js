import mongoose from "mongoose";
const diarySchema = new mongoose.Schema(
  {
    user: { Type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, trim: true, required: true },
    location: { type: String, trim: true, default: "india" },
    content: { type: [String], required: true, default: [] },
    photos: { type: [String], default: [] },
    stickers: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Diary = mongoose.model("Diary".diarySchema);
export default Diary;
