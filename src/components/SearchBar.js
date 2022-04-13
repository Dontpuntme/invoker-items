import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data, passSelection, style }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isFocused, setSearchFocused] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const filteredNames = data.filter((value) => {
      let name = value.localized_name;

      //Return name filtering out river, recipe, and including the search word.
      return (
        name.toLowerCase().includes(searchWord.toLowerCase()) &&
        !name.toLowerCase().includes("recipe") &&
        !name.toLowerCase().includes("river")
      );
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

  const handleEnter = (event) => {
    setSearchFocused(true);
    if ((filteredData.length !== 0) & (event.key === "Enter")) {
      console.log("Entered!")
      const selection = filteredData[0];
      passSelection(selection);
    }
  };
  const eventClicked = (event) => {

    
    console.log("Selected Hero!");
    const value = event.target.getAttribute("value")
    passSelection(JSON.parse(value));
  }

  const clearFocus = (event) => {
    // setSearchFocused(false);
  };
  return (
    <div className="search" style={style}>
      <div className="searchInputs">
        <input
          onFocus={() => setSearchFocused(true)}
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
          onKeyDown={handleEnter}
          onBlur={clearFocus}
        ></input>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon>Filled</SearchIcon>
          ) : (
            <CloseIcon onClick={clearInput} id="clearBtn" />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && isFocused && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="dataItem"
                value={ JSON.stringify(value) }
                key={value.localized_name}
                onClick={eventClicked}
                onMouseDown={(event) => event.preventDefault()}
              >
                <img
                  value={ JSON.stringify(value)  }
                  className="searchBarImg"
                  src={value.url_full_portrait}
                ></img>{" "}
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
