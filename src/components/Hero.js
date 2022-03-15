import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar";
import "./Hero.css";
import Heroes from "../heroImages.json";
import React, { useState } from "react";

function Hero() {
  const [heroFilled, setHero] = useState("");
  const [heroUrl, setUrl] =  useState("");
  const heroList = () => {
    fetch("https://api.opendota.com/api/heroes")
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  };
  const clearHero = () => {
    setHero('');
  }
  return (
    <div className="hero">
      <p >{heroFilled}</p>
      <img className = "heroImage" src={heroUrl} style={{ display: heroFilled.length !== 0 ? "block" : "none" }}></img>
      <SearchBar
        style={{ display: heroFilled.length !== 0 ? "none" : "block" }}
        placeholder="Enter a hero name..."
        data={Heroes}
        passHeroData={setHero}
        passUrlData={setUrl}
      ></SearchBar>
      <Button
        style={{ display: heroFilled.length !== 0 ? "block" : "none" }}
        id="deleteButton"
        variant="danger"
        onClick={clearHero}
      >
        X
      </Button>
    </div>
  );
}

export default Hero;
