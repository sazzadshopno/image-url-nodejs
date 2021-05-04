import express from "express";
import og from "open-graph-scraper";
const router = express.Router();

router.post("/", (req, res) => {
  const url = req.body.url;
  og({ url })
    .then((data) => {
      const { error, result, response } = data;
      if (error) {
        res.json({ success: 0, error });
      }
      res.json({
        success: 1,
        meta: {
          title: result.ogTitle,
          description: result.ogDescription,
          image: {
            url: result.ogImage.url,
          },
        },
      });
    })
    .catch((err) => {
      res.json({ err });
    });
});

module.exports = router;
