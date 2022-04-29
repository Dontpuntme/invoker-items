import React, { useState } from "react";
import Hero from "./Hero";
import Item from "./Item";
import Button from "react-bootstrap/Button";
import "./AdminPage.css";
import ItemGrid from "./ItemGrid";



function AdminPage() {
  
  const [hero, setHero] = useState({
    localized_name: "",
    url_full_portrait: "",
    id: "",
  });
  const addCounter = (event) => {
    console.log(event.target)
    fetch("http://localhost:3000/addCounter?HeroID="+hero.id+"&ItemID="+item.id)
  }
  const addSuggested = (event) => {
    console.log(event.target)
    fetch("http://localhost:3000/addSuggested?HeroID="+hero.id+"&ItemID="+item.id)
  }
  const clearHero = () => {
    setHero({
      localized_name: "",
      url_full_portrait: "",
      id:"",
    });
  };

  const [item, setItem] = useState({
    localized_name: "",
    url_full_portrait: "",
    id: "",
  });
  const clearItem = () => {
    setItem({
      localized_name: "",
      url_full_portrait: "",
      id:"",
    });
  };

  return (
    <div className="Container" style={{display: "inline-block",}}>
        <Hero entity = {hero} setEntity = {setHero} clearEntity = {clearHero}></Hero>
        <Item entity = {item} setEntity = {setItem} clearEntity = {clearItem}></Item>
      <div className="lineOne">
        
        <Button variant="outline-success" onClick={addCounter} >+ Add Item To Counters</Button>
        <Button variant="outline-success"onClick={addSuggested}>+ Add Item To Suggested</Button>
      </div>
      <div className="itemGrids">
        <ItemGrid></ItemGrid>
        <ItemGrid></ItemGrid>
      </div>
    </div>
  );
}

export default AdminPage;
