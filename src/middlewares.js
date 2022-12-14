import multer from "multer";
// import multerS3 from "multer-s3";
// import aws from "aws-sdk";

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  next();
};

export const upload = multer({
  dest: "upload/photos/",
  limits: {
    fileSize: 10000000,
  },
});
