import React from "react";
import Items from "../resources/itemImages.json";
import IconBar from "./IconBar";

function Item({ setEntity, entity, clearEntity }) {
  return (
    <div>
      <IconBar
        data={Items}
        placeholder="Enter a item name..."
        setEntity={setEntity}
        entity={entity}
        clearEntity={clearEntity}
      ></IconBar>
      <p>test {entity.id}</p>
    </div>
  );
}

export default Item;
