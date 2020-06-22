import React from "react";
import "./SearchBar.css";

import Select from "../select";
import Degrees from "../degrees";
import Form from "../form";
import refresh from "../../assets/Refresh.png";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="btn-container">
        <div className="search-bar__btns-left">
          <button className="btn btn_refresh" onClick={props.refresh}>
            <img src={refresh} alt="refresh" />
          </button>

          <Select />

          <Degrees />
        </div>

        <Form anotherCity={props.anotherCity} />
      </div>
    </div>
  );
};

export default SearchBar;
