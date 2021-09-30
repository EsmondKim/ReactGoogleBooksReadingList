import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link, useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.authors) {
      API.saveBook({
        title: formObject.title,
        authors: formObject.authors,
        description: formObject.description,
        image: formObject.image,
        link: formObject.link,
      })
        .then((res) => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={handleInputChange}
              name="authors"
              placeholder="Authors (required)"
            />
            <Input
              onChange={handleInputChange}
              name="description"
              placeholder="Description (required)"
            />
            <Input
              onChange={handleInputChange}
              name="image"
              placeholder="Image (required)"
            />
            <Input
              onChange={handleInputChange}
              name="link"
              placeholder="Link (required)"
            />

            <FormBtn
              disabled={!(formObject.authors && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Results</h1>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>
                    {book.title} written by: {book.authors}
                  </h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-10 md-offset-1">
                <article>
                  <h1>Description</h1>
                  <p>{book.description}</p>
                </article>
              </Col>
            </Row>
          </Jumbotron>
          {books.length ? (
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
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
