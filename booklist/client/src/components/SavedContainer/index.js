import React from "react";
import SavedResults from "../SavedResults";
import "./style.css";

function SavedContainer(props) {
  return (
    <SavedResults
      className="saved-container"
      title={props.data.title}
      author={props.data.author}
      picture={props.data.picture}
      synopsis={props.data.synopsis}
      link={props.data.link}
      id={props.data.id}
    />
  );
}

export default SavedContainer;
