import Diary from "../models/Diary.js";
import User from "../models/USer.js";

export const getDiary = (req, res) => {};
export const register = async (req, res) => {
  const { title, content, photo } = req.body;
  try {
    const newDiary = await Diary.create({
      title,
      content,
      photo,
    });
  } catch (err) {
    console.log(err);
  }
};
