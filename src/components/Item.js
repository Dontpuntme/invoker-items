import React from "react";
import Items from "../resources/itemImages.json";
import IconBar from "./IconBar";

function Item({ setEntity, entity, clearEntity }) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <IconBar
        data={Items}
        placeholder="Enter a item name..."
        setEntity={setEntity}
        entity={entity}
        clearEntity={clearEntity}
      ></IconBar>
    </div>
  );
}

export default Item;
