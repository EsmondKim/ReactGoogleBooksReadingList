const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  picture: { type: String, default: "" },
  synopsis: { type: String, required: true },
  link: { type: String, default: "", unique: true },
  id: { type: String, required: true },
});

const Book = mongoose.model("GoogleBookReadingList", bookSchema);

module.exports = Book;
