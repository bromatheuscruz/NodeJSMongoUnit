const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const service = require("./service");

app.use(bodyParser.json());

app.get("/tasks", async (req, res) => {
  const tasks = await service.getTasks();
  res.json(tasks);
});

app.delete("/tasks/:id", async (req, res) => {
  const deleted = await service.deleteTask(req.params.id);
  res.json(deleted);
});

app.post("/tasks", async (req, res) => {
  const task = await service.addTask(req.body);
  res.json(task);
});

module.exports = app;
