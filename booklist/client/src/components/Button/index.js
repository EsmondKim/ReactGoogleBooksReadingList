import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Button(props) {
  return (
    <button
      className="button"
      type="button"
      className="btn btn-success"
      onClick={props.function}
      id={props.id}
    >
      {props.buttonTxt}
    </button>
  );
}

export default Button;
