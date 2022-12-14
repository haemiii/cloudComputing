import express from "express";
import {
  main,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  diary,
} from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", main);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/:date", diary);

export default globalRouter;
