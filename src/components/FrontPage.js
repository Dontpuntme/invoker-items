import React, { useState } from "react";
import Hero from "./Hero";
import Item from "./Item";
import Button from "react-bootstrap/Button";
import "./FrontPage.css";
import ItemGrid from "./ItemGrid";

function FrontPage() {
  return (
    <div>
      <div className="Heroes">
        <p>Heroes</p>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </div>
      <ItemGrid></ItemGrid>
    </div>
  );
}

export default FrontPage;
