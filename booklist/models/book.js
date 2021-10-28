const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, default: undefined, required: false, unique: false },
  author: { type: Array, default: undefined, required: false, unique: false },
  picture: {
    type: String,
    default: "Placeholder",
    required: false,
    unique: false,
  },
  synopsis: {
    type: String,
    default: undefined,
    required: false,
    unique: false,
  },
  link: {
    type: {},
    default: undefined,
    required: false,
    unique: false,
  },
  id: { type: String, default: "", unique: true },
});

const Book = mongoose.model("GoogleBookReadingList", bookSchema);

module.exports = Book;
