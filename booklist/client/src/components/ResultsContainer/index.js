import React from "react";
import Results from "../Results";

function ResultsContainer(props) {
  return (
    <Results
      className="results-container"
      title={props.data.title}
      author={props.data.author}
      picture={props.data.picture}
      synopsis={props.data.synopsis}
      link={props.data.link}
      id={props.id}
    />
  );
}

export default ResultsContainer;
