import React, { useState } from "react";
import "./ItemGrid.css";
import Items from "../resources/itemImages.json";

function ItemGrid() {
  const filteredItems = Items.filter((value) => {
    let name = value.localized_name;

    //Return name filtering out river, recipe, and including the search word.
    return (
      !name.toLowerCase().includes("recipe") &&
      !name.toLowerCase().includes("river")
    )
    });
  return (
    <div className="Center-Test">
    <div className="Item-Container">
      {filteredItems.map((value, key) => {
        return <img src = {value.url_full_portrait}></img>
      })}
    </div>
    </div>
  );
}

export default ItemGrid;
