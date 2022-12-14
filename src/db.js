import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect("mongodb://127.0.0.1:27017/diary", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
