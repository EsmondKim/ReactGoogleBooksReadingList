import React from "react";
//import API from "../../utils/API";
import ResultsContainer from "../ResultsContainer";
import placeholder from "../../assets/images/placeholder.png";
import { FormBtn } from "../Form";
import Button from "../../components/Button";

function Results(props) {
  const viewLink = (event) => {
    event.preventDefault();
    window.location.href = props.link;
  };

  const saveBook = (event) => {
    event.preventDefault();
    API.saveBook(props.id)
      .then((res) => console.log("Book saved!"))
      .catch((err) => console.log(err));
    window.location.href = "/saved";
  };

  return (
    <div className="card mb-3" styles="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          {props.picture === "placeholder" ? (
            <img className="bookImg" src={placeholder} alt="..." />
          ) : (
            <img className="bookImg" src={props.picture} alt="..." />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">{props.author}</h5>
            <p className="card-text">{props.synopsis}</p>
          </div>
          <Button buttonTxt="View" function={viewLink}></Button>
          <Button buttonTxt="Save"></Button>
        </div>
      </div>
    </div>
  );
}

export default Results;