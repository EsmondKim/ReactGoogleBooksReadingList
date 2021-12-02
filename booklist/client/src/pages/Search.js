import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import useDebounce from "../utils/useDebounce";
import ResultsContainer from "../components/ResultsContainer";

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
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col size="col-md-6">
          <Jumbotron>
            <h2>Search for a book</h2>
          </Jumbotron>
          <SearchForm handleInputChange={handleInputChange} results={search} />
        </Col>
        <Col size="col-md-6 col-sm-12">
          <Jumbotron>
            <h2>Results</h2>
          </Jumbotron>

          <Col size="col-md-12">
            {bookResults.map((book) => {
              return <ResultsContainer data={book} key={book.key} />;
            })}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
