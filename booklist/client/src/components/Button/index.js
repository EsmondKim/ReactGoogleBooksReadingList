import React from "react";

function Button(props) {
  return (
    <button
      className="button"
      type="button"
      className="btn btn-success"
      onClick={props.function}
    >
      {props.buttonTxt}
    </button>
  );
}

export default Button;
