const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  started: Date,
  completed: Boolean
});

const Product = mongoose.model("products", productSchema);

module.exports = {
  getTasks: () => {
    return Product.find({});
  },
  addTask: data => new Product(data).save(),
  deleteTask: id => Product.findByIdAndRemove(id)
};
