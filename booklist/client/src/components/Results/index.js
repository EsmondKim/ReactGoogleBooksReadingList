import React from "react";
//import API from "../../utils/API";
//import placeholder from "../../assets/images";

function Results(props) {
  return (
    <div>
      <h5>{props.data.title}</h5>
      <h5>{props.data.author}</h5>
      <h5>{props.data.synopsis}</h5>
    </div>
  );
}

export default Results;
