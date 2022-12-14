import User from "../models/User.js";
import Diary from "../models/Diary.js";
import bcrypt from "bcrypt";

export const main = async (req, res) => {
  const loggedIn = res.locals.loggedIn;
  if (loggedIn) {
    const { _id } = req.session.user;
    console.log(req.session.user);
    const allDiary = await Diary.find({ owner: _id });
    console.log(allDiary);
    return res.render("main", { allDiary });
  }
  return res.render("main");
};

export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  const { id, password, name } = req.body;
  try {
    let user = await User.create({
      id,
      password,
      name,
    });
  } catch (err) {
    console.log(err);
  }
  return res.redirect("/");
};
export const getLogin = (req, res) => {
  return res.render("login");
};
export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  let user = await User.findOne({ id });
  if (!user) {
    return res.send("존재하지 않는 사용자입니다.");
  } else {
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res
        .status(400)
        .render("login", { errorMessage: "Wrong password" });
    }
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/main");
};

export const logout = (req, res) => {
  req.session.loggedIn = false;
  req.session.destroy();
  return res.redirect("/main");
};

export const diary = (req, res) => {
  return res.render("diary");
};
