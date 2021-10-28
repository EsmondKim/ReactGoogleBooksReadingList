import React from "react";
import API from "../../utils/API";
//import loadSaved from "../../pages/Saved";
import placeholder from "../../assets/images/placeholder.png";
import Button from "../Button";
import DeleteBtn from "../DeleteBtn";
import "./style.css";

function SavedResults(props) {
  const viewLink = (event) => {
    event.preventDefault();
    window.location.href = props.link;
  };

  function deleteBook(id) {
    API.deleteBook(id)
      // .then((res) => loadSaved())
      .then((res) => console.log("Book deleted."))
      .catch((err) => console.log(err));
    // console.log("Book deleted.");
  }

  // This should become deleteBook function
  // const saveBook = (event) => {
  //     event.preventDefault();
  //     API.saveBook(props.id)
  //       .then((res) => console.log("Book saved!"))
  //       .catch((err) => console.log(err));
  //     window.location.href = "/saved";
  //   };

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
          <DeleteBtn
            onClick={() => {
              deleteBook(props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SavedResults;
