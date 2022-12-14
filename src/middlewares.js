import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();
export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  next();
};

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const s3Image = multerS3({
  s3: s3,
  bucket: "mydiiary",
  acl: "public-read",
});

export const upload = multer({
  dest: "upload/photos/",
  limits: {
    fileSize: 10000000,
  },
  storage: s3Image,
});
