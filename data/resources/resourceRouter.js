const express = require("express");

const shop = require("./resourceModel");

const router = express.Router();

router.get("/", (req, res) => {
  shop
    .get()
    .then((stuff) => {
      res.status(200).json(stuff);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Server error retrieving the resources." });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  if (body.resource_name) {
    shop
      .insert(body)
      .then((newResource) => {
        res.status(201).json(newResource);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "server error creating a new resource",
          error: error,
        });
      });
  } else {
    res.status(400).json({
      message: `Name is required`,
    });
  }
});

module.exports = router;
