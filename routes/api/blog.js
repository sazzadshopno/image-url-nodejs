import express from "express";
import BlogModel from "~/model/blog";
import mongoose from "mongoose";
import * as admin from "firebase-admin";
const router = express.Router();

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
    console.log(decodedIdToken);
    next();
    return;
  } catch (e) {
    res.status(403).send("Unauthorized");
    return;
  }
};

router.get("/", (req, res) => {
  BlogModel.find({}, (err, blogs) => {
    if (err) {
      res.json(err);
    } else {
      res.json(blogs);
    }
  });
});
router.get("/id-generator", authenticate, (req, res) => {
  const id = mongoose.Types.ObjectId();
  res.json({ id });
});
router.post("/create", authenticate, (req, res) => {
  if (req.user.email === req.body.author) {
    const _id = req.body.id;
    const author = req.body.author;
    const nsfw = req.body.nsfw;
    const keywords = req.body.keywords;
    const postHead = req.body.content.postHead;
    const postContents = req.body.content.postContents;
    const blog = BlogModel({
      _id,
      author,
      nsfw,
      keywords,
      content: { postHead, postContents },
    });
    blog
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          success: 1,
          createdProduct: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  } else {
    res.status(403).send("Unauthorized");
  }
});
module.exports = router;
