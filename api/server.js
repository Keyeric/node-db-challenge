const express = require("express");
const helmet = require("helmet");

const server = express();

// Router
const projectRouter = require("../data/projects/projectRouter");
const resourceRouter = require("../data/resources/resourceRouter");
const taskRouter = require("../data/tasks/taskRouter");

server.use(helmet());
server.use(express.json());

// Endpoint routers
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

//Base url endpoint(s)
server.get("/", (req, res) => {
  res.send(`
    <h1>Engineering Start!</h1>
  <h2>Navigate to</h2>
  <h3>/api</h3>
  `);
});

server.get("/api", (req, res) => {
  res.send(`
  <h1>Navigate to</h1> 
  <h2>/projects</h2>
  <h2>/resources</h2>
  <h2>/tasks</h2>
  `);
});

module.exports = server;
