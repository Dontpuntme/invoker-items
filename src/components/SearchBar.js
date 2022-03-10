import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data, passHeroData, style, passUrlData}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.localized_name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
    const name = event.target.value;
    const firstHero = filteredData[0].localized_name;
    const firstImage = filteredData[0].url_full_portrait;
    passHeroData(firstHero);
    passUrlData(firstImage)
    }
  };
  return (
    <div className="search" style = {style}>
      <div className="searchInputs">
        <input
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
          onKeyDown={handleEnter}
        ></input>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon>Filled</SearchIcon>
          ) : (
            <CloseIcon onClick={clearInput} id="clearBtn" />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="dataItem"
                value={value}
                key={value.localized_name}
              >
                {" "}
                {value.localized_name}{" "}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
