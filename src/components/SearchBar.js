import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}></input>
        <div className="searchIcon"><SearchIcon/></div>
      </div>
      <div className="dataResults"></div>
    </div>
  );
}

export default SearchBar;
