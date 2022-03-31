import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data, passHeroData, style, passUrlData }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isFocused, setSearchFocused] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const filteredNames = data.filter((value) => {
      let name = value.localized_name
      return name
        .toLowerCase()
        .includes(searchWord.toLowerCase())
        &&
        !name
        .toLowerCase()
        .includes("recipe")
        &&
        !name
        .toLowerCase()
        .includes("river");
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredNames);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSelectHero = (event) => {
    setSearchFocused(true)
    if (
      (filteredData.length !== 0) &
      (event.key === "Enter" || event.type === "click")
    ) {
      console.log();
      const name = event.target.getAttribute("value");
      const url = event.target.getAttribute("url");
      const firstHero =
        event.type === "click"
          ? name
          : filteredData[0].localized_name;
      const firstImage =
        event.type === "click"
          ? url
          : filteredData[0].url_full_portrait;
      passHeroData(firstHero);
      passUrlData(firstImage);
    }
  };
  const clearFocus = (event) => {
    setSearchFocused(false)
  }
  return (
    <div className="search" style={style}>
      <div className="searchInputs">
        <input
          onFocus = {() =>setSearchFocused(true)}
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
          onKeyDown={handleSelectHero}
          onBlur = {clearFocus}
        ></input>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon>Filled</SearchIcon>
          ) : (
            <CloseIcon onClick={clearInput} id="clearBtn" />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && isFocused &&  (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="dataItem"
                value={value.localized_name}
                url = {value.url_full_portrait}
                key={value.localized_name}
                onClick={handleSelectHero}
                onMouseDown={(event)=>event.preventDefault()}
              >
                <img value={value.localized_name}
                url = {value.url_full_portrait} className = "searchBarImg" src = {value.url_full_portrait}></img>
                {" "}
                {value.localized_name}{" "}
              </div>
            );
          })}
        </div>
      ) }
    </div>
  );
}

export default SearchBar;
