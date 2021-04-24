import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import cors from "cors";
import sizeOf from "image-size";
import sharp from "sharp";
import e from "express";
//Variable
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// serving static file
app.use(express.static("public"));
// Establish mongoDB connection

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

app.use(express.json({ limit: "5mb" }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const postId = req.body.postId;
    const rootPath = path.resolve("./");
    const publicPath = "public";
    const uploadPath = "uploads";
    const postPath = `uploads/${postId}`;
    const filePath = `${publicPath}/${postPath}/`;
    // Create Public directory if doesnt exist
    if (!fs.existsSync(`${rootPath}/${publicPath}/`)) {
      fs.mkdirSync(`${rootPath}/${publicPath}/`);
    }
    // --------------------------------------

    // Create public/uploads directory if doesnt exist
    if (!fs.existsSync(`${rootPath}/${publicPath}/${uploadPath}/`)) {
      fs.mkdirSync(`${rootPath}/${publicPath}/${uploadPath}/`);
    }
    // --------------------------------------

    // Create public/uploads/postId directory if doesnt exist
    if (!fs.existsSync(`${rootPath}/${publicPath}/${uploadPath}/${postId}/`)) {
      fs.mkdirSync(`${rootPath}/${publicPath}/${uploadPath}/${postId}/`);
    }
    // --------------------------------------

    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split(" ").join("-"));
  },
});

const upload = multer({
  storage: storage,
}).any();

app.get("/api/image/", (req, res) => {
  res.re;
  res.json({ message: "Hmm" });
});

app.post("/api/image/", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.json({ success: 0, message: err });
    } else if (req.body.postId == undefined && req.files.length == 0) {
      res.json({ success: 0, message: "postId and File not provided" });
    } else if (req.body.postId == undefined) {
      res.json({ success: 0, message: "postId not provided" });
    } else if (req.files.length == 0) {
      res.json({ success: 0, message: "File not provided" });
    } else {
      const filename = req.files[0].filename,
        dest = req.files[0].destination.replace("public", "");
      const dimension = sizeOf(req.files[0].destination + filename);
      console.log(req.files[0]);
      const maxWidth = 1920,
        maxHeight = 1080;
      let ratio = 0,
        width = dimension.width,
        height = dimension.height;
      if (width > maxWidth) {
        ratio = maxWidth / width;
        height = parseInt(height * ratio);
        width = parseInt(width * ratio);
      }
      if (height > maxHeight) {
        ratio = maxHeight / height;
        width = parseInt(width * ratio);
        height = parseInt(height * ratio);
      }
      const newFileName = `${width}x${height}-${filename}`;
      if (req.files[0].mimetpe == "image/png") {
        sharp(req.files[0].path)
          .resize(width, height)
          .png({ quality: 30 })
          .toFile(path.resolve(req.files[0].destination, newFileName))
          .then(() => {
            fs.unlinkSync(req.files[0].path);
          });
      } else {
        sharp(req.files[0].path)
          .resize(width, height)
          .jpeg({ quality: 30 })
          .toFile(path.resolve(req.files[0].destination, newFileName))
          .then(() => {
            fs.unlinkSync(req.files[0].path);
          });
      }

      const url = `https://${req.headers.host}${dest}${newFileName}`;
      res.json({
        success: 1,
        file: {
          url: url,
          nsfw: false,
        },
      });
    }
  });
});

//App running at
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
