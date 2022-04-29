import React, { useState } from "react";
import Heroes from "../resources/heroImages.json";
import IconBar from "./IconBar";

function Hero({setEntity, entity = {
  localized_name: "",
  url_full_portrait: "",
  id: "",
}, clearEntity}) {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <IconBar
        data={Heroes}
        placeholder="Enter a hero name..."
        setEntity={setEntity}
        entity={entity}
        clearEntity={clearEntity}
      ></IconBar>
    </div>
  );
}

export default Hero;
