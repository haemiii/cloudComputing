import express from "express";
import {
  main,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  diary,
  logout,
} from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/main", main);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/").get(getLogin).post(postLogin);
globalRouter.get("/logout", logout);
globalRouter.get("/:date", diary);

export default globalRouter;
