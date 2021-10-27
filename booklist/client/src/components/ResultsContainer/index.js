import React from "react";
import Results from "../Results";
import Saved from "../SavedResults";

function ResultsContainer(props) {
  if (props.search === true) {
    return (
      <Results
        className="results-container"
        title={props.data.title}
        author={props.data.author}
        picture={props.data.picture}
        synopsis={props.data.synopsis}
        link={props.data.link}
        id={props.data.key}
      />
    );
  } else {
    return (
      <Saved
        className="results-container"
        title={props.data.title}
        author={props.data.author}
        picture={props.data.image}
        synopsis={props.data.synopsis}
        link={props.data.link}
        id={props.data.id}
      />
    );
  }
}

export default ResultsContainer;
