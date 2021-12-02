const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, unique: false, required: false },
  author: { type: Array, unique: false, required: false },
  picture: {
    type: String,
    unique: false,
    required: false,
  },
  synopsis: {
    type: String,
    unique: false,
    required: false,
  },
  link: {
    type: String,
    unique: false,
    required: false,
  },
  id: {
    type: String,
    unique: false,
    required: true,
  },
  // date: { type: Date, default: Date.now },
});

const Book = mongoose.model("GoogleBookReadingList", bookSchema);

module.exports = Book;
