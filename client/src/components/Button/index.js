import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Button(props) {
  return (
    <button
      className="button, btn btn-success"
      type="button"
      onClick={props.function}
      id={props.id}
    >
      {props.buttonTxt}
    </button>
  );
}

export default Button;
