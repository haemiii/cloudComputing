import Diary from "../models/Diary.js";
import User from "../models/User.js";

//사용자가 작성한 일기(세부내용들)
export const getDiary = async (req, res) => {
  const { id } = req.params;
  try {
    const daily = await Diary.findById(id);
    return res.render("daily", { daily });
  } catch (err) {
    console.log(err);
  }
};

//일기 등록 api
export const getRegister = (req, res) => {
  return res.render("diary");
};
export const postRegister = async (req, res) => {
  const { title, content, photo } = req.body;
  const { location } = req.file;
  const { _id } = req.session.user;

  try {
    const newDiary = await Diary.create({
      title,
      content,
      photo: location,
      owner: _id,
    });
  } catch (err) {
    console.log(err);
  }
  return res.redirect("/main");
};
