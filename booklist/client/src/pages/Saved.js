import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedContainer from "../components/SavedContainer";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  const loadSaved = () => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadSaved();
  }, [savedBooks]);

  return (
    <div>
      <Row>
        <Col size="col-md-6 offset-md-3">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
          <Col size="col-md-12">
            {savedBooks.map((book) => {
              return <SavedContainer data={book} key={book.id} />;
            })}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Saved;
