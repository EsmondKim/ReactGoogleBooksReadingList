import React from "react";
import { Container, Row, Col } from "../Grid";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved
        </a>
      </nav>
      <Container fluid>
        <Row>
          <Col size="col-md-6">
            <h1>React Reading List</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nav;
