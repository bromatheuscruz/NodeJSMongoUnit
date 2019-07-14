const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/mongounit";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
});

const taskSchema = new mongoose.Schema({
  name: String,
  started: Date,
  completed: Boolean
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = {
  getTasks: () => {
    return Task.find({});
  },
  addTask: data => new Task(data).save(),
  deleteTask: id => Task.findByIdAndRemove(id)
};
