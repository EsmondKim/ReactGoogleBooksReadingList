import React from "react";
//import API from "../../utils/API";
import placeholder from "../../assets/images/placeholder.png";
import { FormBtn } from "../Form";

function Results(props) {
  return (
    <div className="card mb-3" styles="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          {props.picture === "placeholder" ? (
            <img className="bookImg" src={placeholder} alt="..." />
          ) : (
            <img className="bookImg" src={props.data.picture} alt="..." />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <h5 className="card-title">{props.data.author}</h5>
            <p className="card-text">{props.data.synopsis}</p>
          </div>
          <FormBtn
          // onClick={handleFormSubmit}
          >
            Delete
          </FormBtn>
          <FormBtn>
            {/* onClick={handleFormSubmit} */}
            View
          </FormBtn>
        </div>
      </div>
    </div>
  );
}

export default Results;
