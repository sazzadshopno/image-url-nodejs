import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import cors from "cors";
import sizeOf from "image-size";
import sharp from "sharp";
import * as admin from "firebase-admin";
import firebase from "firebase";
import "firebase/storage";
import XMLHttpRequest from "xhr2";

//Variable
global.XMLHttpRequest = XMLHttpRequest;
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FB_TYPE,
    project_id: process.env.FB_PROJECT_ID,
    private_key_id: process.env.FB_PRIVATE_KEY_ID,
    private_key: process.env.FB_PRIVATE_KEY,
    client_email: process.env.FB_CLIENT_EMAIL,
    client_id: process.env.FB_CLIENT_ID,
    auth_uri: process.env.FB_AUTH_URI,
    token_uri: process.env.FB_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER,
    client_x509_cert_url: process.env.FB_CERT_URL,
  }),
  storageBucket: process.env.FB_STORAGE_BUCKET,
});

app.use(cors());
// serving static file
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

app.use(express.json({ limit: "5mb" }));

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

const authenticate = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    res.status(403).send("Unauthorized");
    return;
  }
  const idToken = req.headers.authorization.split("Bearer ")[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    req.auth = decodedIdToken;
    next();
    return;
  } catch (e) {
    res.status(403).send("Unauthorized");
    return;
  }
};

app.post("/api/image/", (req, res) => {
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
      const newFileName = `${width}x${height}-${filename}`;
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

//App running at
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
