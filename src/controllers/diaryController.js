import Diary from "../models/Diary.js";
import User from "../models/User.js";

export const getDiary = async (req, res) => {
  const { id } = req.params;
  try {
    const daily = await Diary.findById(id);
    return res.render("daily", { daily });
  } catch (err) {
    console.log(err);
  }
};
export const register = async (req, res) => {
  const { title, content, photo } = req.body;
  const { location } = req.file;
  const { _id } = req.session.user;
  console.log(req.body);
  console.log("photoUrl", photo);
  console.log(req.file);

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
