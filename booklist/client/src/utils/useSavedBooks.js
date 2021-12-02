import { useState } from "react";
import API from "./API";

const useSavedBooks = () => {
  // useState using statusState to represent state, and setStatusState to set that specific state
  const [savedBooks, setSavedBooks] = useState("");

  const getSavedBooks = () => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  // returning the state and the status object which will be used the capture the value from the form.
  return {
    getSavedBooks,
    savedBooks,
  };
};

export default useSavedBooks;
