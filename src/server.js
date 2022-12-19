import express from "express";
import globalRouter from "./routers/globalRouter.js";
import diaryRouter from "./routers/diaryRouter.js";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares.js";
import "./db.js";

dotenv.config();
const app = express();

//frontend로 pug 사용
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//session 설정
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);
app.use("/upload", express.static("upload"));
app.use("/css", express.static(path.join(process.cwd(), "src/public/css")));

app.use("/", globalRouter);
app.use("/diary", diaryRouter);

app.listen(3000, () => {
  console.log("port 3000 is opened");
});
