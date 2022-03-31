import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar";
import "./Hero.css";
import React, { useState } from "react";

function IconBar({data, placeholder}) {
  const [entityFilled, setEntity] = useState("");
  const [entityUrl, setUrl] =  useState("");
  
  const clearEntity = () => {
    setEntity('');
  }
  return (
    <div className="hero">
      <p >{entityFilled}</p>
      <img className = "heroImage" src={entityUrl} style={{ display: entityFilled.length !== 0 ? "block" : "none" }}></img>
      <SearchBar
        style={{ display: entityFilled.length !== 0 ? "none" : "block" }}
        placeholder={placeholder}
        data={data}
        passHeroData={setEntity}
        passUrlData={setUrl}
      ></SearchBar>
      <Button
        style={{ display: entityFilled.length !== 0 ? "block" : "none" }}
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
