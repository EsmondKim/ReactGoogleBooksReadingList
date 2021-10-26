import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import useDebounce from "../utils/useDebounce";
import Results from "../components/Results";
import ResultsContainer from "../components/ResultsContainer";
import DeleteBtn from "../components/DeleteBtn";
import { Link, useParams } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  const [search, setSearch] = useState("Search for a book");
  const [bookResults, setBookResults] = useState([]);
  const debouncedSearchTerm = useDebounce(search, 3000);

  useEffect(() => {
    if (!search) {
      return;
    }

    if (debouncedSearchTerm) {
      API.searchTerms(debouncedSearchTerm).then((res) => {
        setBookResults(res);
      });
      // .then((res) => {
      //   if (res.data.length === 0) {
      //     console.log(error);
      //     throw new Error("No results found.");
      //   }
      //   if (res.data.status === "error") {
      //     console.log(error);
      //     throw new Error(res.data.message);
      //   }
      // setTitle(res.data[1][0]);
      // setAuthors(res.data);
      // setImage(res.data);
      // setDescription(res.data);
      // setLink([res.data.items]);
      //       })
      //       .catch((err) => setError(err));
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  //***Everything below is from the original BookSearch Exercise from Class***
  // const [book, setBook] = useState({});
  // const [books, setBooks] = useState([]);
  // const [formObject, setFormObject] = useState({});

  // useEffect(() => {
  //   loadBooks();
  // }, []);

  // function loadBooks() {
  //   API.getBooks()
  //     .then((res) => setBooks(res.data))
  //     .catch((err) => console.log(err));
  // }

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then((res) => loadBooks())
  //     .catch((err) => console.log(err));
  // }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.authors) {
  //     API.saveBook({
  //       title: formObject.title,
  //       authors: formObject.authors,
  //       description: formObject.description,
  //       image: formObject.image,
  //       link: formObject.link,
  //     })
  //       .then((res) => loadBooks())
  //       .catch((err) => console.log(err));
  //   }
  // }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Search for a book</h1>
          </Jumbotron>
          <SearchForm handleInputChange={handleInputChange} results={search} />
          {/* <FormBtn

          // disabled={!(formObject.authors && formObject.title)}
          // onClick={handleFormSubmit}
          >
            Submit Book
          </FormBtn> */}
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Results</h1>
          </Jumbotron>

          <Col size="md-12">
            {console.log("hit that shit")}
            {bookResults.map((book) => {
              return <ResultsContainer data={book} key={book.key} />;
            })}
            {console.log("past that shit")}
          </Col>

          {/* {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.authors} {book.description}{" "}
                      {book.image} {book.link}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )} */}
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
