import axios from "axios";

export default {
  //Search the API
  searchTerms: function (query) {
    console.log(query);
    const apiKey = process.env.REACT_APP_API_KEY;

    return axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      )
      .then((res) => {
        const booklist = res.data.items;

        return booklist.map((index) => {
          let thumbnail;
          // let buyLink;
          if (index.volumeInfo.imageLinks) {
            thumbnail = index.volumeInfo.imageLinks.thumbnail;
          } else {
            thumbnail = "placeholder";
          }
          // if (index.saleInfo.buyLink) {
          //   buyLink = index.saleInfo.buyLink;
          // } else {
          //   buyLink =
          //     "Google Books API does not include a buy link for this book.";
          // }

          return {
            title: index.volumeInfo.title,
            author: index.volumeInfo.authors,
            picture: thumbnail,
            synopsis: index.volumeInfo.description,
            // link: buyLink,
            link: index.saleInfo.buyLink,
            key: index.id,
          };
        });
      })
      .catch((err) => console.log(err));
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
