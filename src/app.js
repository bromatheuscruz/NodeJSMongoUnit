const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const service = require("./service");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.get("/products", async (req, res) => {
  const tasks = await service.getTasks();
  res.json(tasks);
});

app.delete("/products/:id", async (req, res) => {
  const deleted = await service.deleteTask(req.params.id);
  res.json(deleted);
});

app.post("/products", async (req, res) => {
  const task = await service.addTask(req.body);
  res.json(task);
});

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/mongounit";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
});

module.exports = app;
