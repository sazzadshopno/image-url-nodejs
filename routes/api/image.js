import express from "express";
import XMLHttpRequest from "xhr2";
import { v4 as uuidv4 } from "uuid";
import sizeOf from "image-size";
import sharp from "sharp";
import * as admin from "firebase-admin";
import firebase from "firebase";
import "firebase/storage";
import fs from "fs";
import path from "path";
import multer from "multer";
require("dotenv").config();
global.XMLHttpRequest = XMLHttpRequest;

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("public/")) {
      fs.mkdirSync("public/");
    }
    cb(null, "./public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split(" ").join("-"));
  },
});

const upload = multer({
  storage: storage,
}).any();

router.post("/", (req, res) => {
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
      const filename = req.files[0].filename;
      const dimension = sizeOf(req.files[0].path);
      const maxWidth = 1280,
        maxHeight = 720;
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
      const id = uuidv4();
      const ext = filename.split(".").pop();
      const newFileName = `${id}.${ext}`;
      sharp(req.files[0].path)
        .resize(width, height)
        .jpeg({ quality: 30 })
        .toFile(path.resolve(req.files[0].destination, newFileName))
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(
              process.env.FB_USERNAME,
              process.env.FB_PASSWORD
            )
            .then((user) => {
              const file = fs.readFileSync(`public/${newFileName}`);
              fs.unlinkSync(`public/${newFileName}`);
              fs.unlinkSync(`public/${req.files[0].filename}`);
              firebase
                .storage()
                .ref()
                .child(`${req.body.postId}/${newFileName}`)
                .put(file)
                .then((f) => {
                  const url = `https://firebasestorage.googleapis.com/v0/b/${process.env.FB_STORAGE_BUCKET}/o/${req.body.postId}%2F${newFileName}?alt=media`;
                  res.json({
                    success: 1,
                    file: {
                      url: url,
                      nsfw: false,
                    },
                  });
                })
                .catch((err) => {
                  res.json({ err });
                });
            });
        });
    }
  });
});

module.exports = router;
