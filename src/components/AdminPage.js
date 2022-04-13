import Hero from "./Hero";
import Item from "./Item";
import Button from "react-bootstrap/Button";
import "./AdminPage.css";

const addCounter = (heroid, itemid) => {
  console.log(heroid)
  console.log(itemid)
  fetch("http://localhost:3000/addCounter?HeroID="+heroid+"&ItemID="+itemid)
}

function AdminPage() {
  return (
    <div className="Container" style={{display: "inline-block",}}>
        <Hero></Hero>
        <Item></Item>
      <div className="lineOne">
        
        <Button variant="outline-success" onClick={addCounter} >+ Add Item To Counters</Button>
        <Button variant="outline-success">+ Add Item To Suggested</Button>
      </div>
    </div>
  );
}

export default AdminPage;
