import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar";
import "./Hero.css";
import React, { useState } from "react";

function IconBar({data, placeholder, setEntity, entity, clearEntity}) {

  
  return (
    <div className="hero">
      <p >{entity.localized_name}</p>
      <img className = "heroImage" src={entity.url_full_portrait} style={{ display: entity.localized_name.length !== 0 ? "block" : "none" }}></img>
      <SearchBar
        style={{ display: entity.localized_name.length !== 0 ? "none" : "block" }}
        placeholder={placeholder}
        data={data}
        passSelection={setEntity}
      ></SearchBar>
      <Button
        style={{ display: entity.localized_name.length !== 0 ? "block" : "none" }}
        id="deleteButton"
        variant="danger"
        onClick={clearEntity}
      >
        X
      </Button>
    </div>
  );
}

export default IconBar;
