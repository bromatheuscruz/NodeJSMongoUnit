const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
  name: String,
  started: Date,
  completed: Boolean
});

const Task = mongoose.model("products", taskSchema);

module.exports = {
  getTasks: () => {
    return Task.find({});
  },
  addTask: data => new Task(data).save(),
  deleteTask: id => Task.findByIdAndRemove(id)
};
