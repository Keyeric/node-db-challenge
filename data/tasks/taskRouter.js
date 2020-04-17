const express = require("express");

const todo = require("./taskModel");

const router = express.Router();

router.get("/", (req, res) => {
  todo
    .get()
    .then((stuff) => {
      res.status(200).json(stuff);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Server error retrieving the tasks." });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  if (body.project_id && body.task_description && body.completed) {
    todo
      .insert(body)
      .then((newTask) => {
        res.status(201).json(newTask);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "server error creating a new task",
          error: error,
        });
      });
  } else {
    res.status(400).json({
      message: `Description and Completion Status is required. Please attach valid project id`,
    });
  }
});

module.exports = router;
