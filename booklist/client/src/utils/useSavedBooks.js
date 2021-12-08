import { useState } from "react";
import API from "./API";

const useSavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState("");

  const getSavedBooks = () => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  return {
    getSavedBooks,
    savedBooks,
  };
};

export default useSavedBooks;
