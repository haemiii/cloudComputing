import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  photo: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Diary = mongoose.model("Diary", diarySchema);
export default Diary;
