import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ResultsContainer from "../components/ResultsContainer";
import Results from "../components/Results";

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
  }, []);

  return (
    <div>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
          <Col size="md-12">
            {console.log("At Saved Books", savedBooks)}
            {savedBooks.map((book) => {
              return (
                <ResultsContainer data={book} key={book._id} search={false} />
              );
            })}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Saved;
