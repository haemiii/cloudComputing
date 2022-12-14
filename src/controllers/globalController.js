import User from "../models/USer.js";

import bcrypt from "bcrypt";
export const main = (req, res) => {
  return res.render("main");
};

export const getJoin = (req, res) => {
  return res.render("join");
};
export const postJoin = async (req, res) => {
  const { id, password, name } = req.body;
  try {
    const user = await User.create({
      id,
      password,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getLogin = (req, res) => {
  return res.render("login");
};
export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
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
  return res.redirect("/");
};
export const diary = (req, res) => {};
