import express from "express";
import { getDiary, register } from "../controllers/diaryController.js";
import { upload } from "../middlewares.js";
const diaryRouter = express.Router();

diaryRouter.route("/:id([0-9a-f]{24})").get(getDiary);
diaryRouter.route("/register").post(upload.single("photo"), register);

export default diaryRouter;
