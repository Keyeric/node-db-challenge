const express = require("express");

const start = require("./projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  start
    .get()
    .then((stuff) => {
      res.status(200).json(stuff);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Server error retrieving the projects." });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  if (body.project_name && body.completed) {
    start
      .insert(body)
      .then((newProject) => {
        res.status(201).json(newProject);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "server error creating a new project",
          error: error,
        });
      });
  } else {
    res.status(400).json({
      message: `Name and Completion Status are required`,
    });
  }
});

module.exports = router;
