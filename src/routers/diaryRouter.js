import express from "express";
import { getDiary, register } from "../controllers/diaryController.js";
const diaryRouter = express.Router();

diaryRouter.route("/:id").get(getDiary);
diaryRouter.post("/register", register);

export default diaryRouter;
