import React, { useEffect, useState } from "react";
import useSavedBooks from "../../utils/useSavedBooks";
import API from "../../utils/API";
import placeholder from "../../assets/images/placeholder.png";
import Button from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import "./style.css";
import { set } from "mongoose";

function Results(props) {
  const viewLink = (event) => {
    event.preventDefault();
    window.location.href = props.link;
  };

  const notifySuccess = () => toast("Book saved!");
  const notifyDuplicate = () =>
    toast("This book has already been saved!  Choose another!");
  const notifyFailure = () =>
    toast("Book failed to save due to database error!");

  const [disable, setDisable] = useState(false);

  const { getSavedBooks, savedBooks } = useSavedBooks();

  const idChecker = savedBooks;

  useEffect(() => {
    getSavedBooks();
  }, []);

  const saveBook = (event) => {
    event.preventDefault();
    getSavedBooks();
    if (idChecker.filter((record) => record.id === props.id).length > 0) {
      notifyDuplicate();
    } else {
      setDisable(true);
      API.saveBook({
        title: props.title,
        author: props.author,
        picture: props.picture,
        synopsis: props.synopsis,
        link: props.link,
        id: props.id,
      })
        .then((res) => {
          console.log(res, "Book saved!");
          notifySuccess();
        })
        .catch((err) => {
          console.log(err);
          notifyFailure();
        });
    }
  };

  return (
    <div className="card mb-3" styles="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          {props.picture === "placeholder" ? (
            <img className="bookImg" src={placeholder} alt="placeholder" />
          ) : (
            <img className="bookImg" src={props.picture} alt={props.title} />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">{props.author}</h5>
            <p className="card-text">{props.synopsis}</p>
          </div>
          <Button buttonTxt="View" function={viewLink}></Button>
          <Button
            buttonTxt="Save"
            function={saveBook}
            doubleClickFunction={saveBook}
          ></Button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Results;
