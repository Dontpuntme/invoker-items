import Hero from "./Hero";
import Item from "./Item";
import Button from "react-bootstrap/Button";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div className="Container" style={{display: "inline-block",}}>
        <Hero></Hero>
        <Item></Item>
      <div className="lineOne">
        
        <Button class="btn btn-outline-success">+ Add Item To Counters</Button>
        <Button class="btn btn-outline-success">+ Add Item To Suggested</Button>
      </div>
    </div>
  );
}

export default AdminPage;
