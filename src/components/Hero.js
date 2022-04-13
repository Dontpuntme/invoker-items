import React, { useState } from "react";
import Heroes from "../resources/heroImages.json";
import IconBar from "./IconBar";

function Hero({setEntity, entity , clearEntity}) {
  
  return (
    <div>
      <IconBar
        data={Heroes}
        placeholder="Enter a hero name..."
        setEntity={setEntity}
        entity={entity}
        clearEntity={clearEntity}
      ></IconBar>
      <p>test {entity.id}</p>
    </div>
  );
}

export default Hero;
