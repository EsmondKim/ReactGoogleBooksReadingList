import React, { useEffect, useRef } from "react";
import useSavedBooks from "../utils/useSavedBooks";
import { Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedContainer from "../components/SavedContainer";

function Saved() {
  const { getSavedBooks, savedBooks } = useSavedBooks();

  useEffect(() => {
    getSavedBooks();
  }, [savedBooks]);

  const savedDocuments = Array.from(savedBooks);

  return (
    <div>
      <Row>
        <Col size="col-md-6 offset-md-3">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
          <Col size="col-md-12">
            {savedDocuments.map((book) => {
              return <SavedContainer data={book} key={book.id} />;
            })}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Saved;
