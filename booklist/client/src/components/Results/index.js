import React, { useEffect } from "react";
import useSavedBooks from "../../utils/useSavedBooks";
import API from "../../utils/API";
import placeholder from "../../assets/images/placeholder.png";
import Button from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";
import "./style.css";

function Results(props) {
  const viewLink = (event) => {
    event.preventDefault();
    window.location.href = props.link;
  };

  const notifySuccess = () => toast("Book saved!");
  const notifyFailure = () =>
    toast("This book has already been saved!  Choose another!");

  const { getSavedBooks, savedBooks } = useSavedBooks();

  const idChecker = savedBooks;
  console.log(idChecker);

  useEffect(() => {
    getSavedBooks();
    console.log(savedBooks);
  }, []);

  const saveBook = (event) => {
    event.preventDefault();
    if (idChecker.filter((record) => record.id === props.id).length > 0) {
      notifyFailure();
    } else {
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
          <Button buttonTxt="Save" function={saveBook}></Button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Results;
