import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in your search for a book"
          id="term"
        />
        <p>*Search will run automatically when you stop typing.</p>
      </div>
    </form>
  );
}

export default SearchForm;
