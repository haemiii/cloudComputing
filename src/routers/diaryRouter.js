import express from "express";
import {
  getDiary,
  postRegister,
  getRegister,
} from "../controllers/diaryController.js";
import { upload } from "../middlewares.js";
const diaryRouter = express.Router();

//일기에 관한 api들

diaryRouter.route("/:id([0-9a-f]{24})").get(getDiary);
diaryRouter
  .route("/register")
  .post(upload.single("photo"), postRegister)
  .get(getRegister);

export default diaryRouter;
