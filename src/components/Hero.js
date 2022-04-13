import React, { useState } from "react";
import Heroes from "../resources/heroImages.json";
import IconBar from "./IconBar";

function Hero() {
  const [entityFilled, setEntity] = useState({
    localized_name: "",
    url_full_portrait: "",
  });
  const clearEntity = () => {
    setEntity({
      localized_name: "",
      url_full_portrait: "",
    });
  };
  return (
    <div>
      <IconBar
        data={Heroes}
        placeholder="Enter a hero name..."
        setEntity={setEntity}
        entity={entityFilled}
        clearEntity={clearEntity}
      ></IconBar>
      <p>test {entityFilled.localized_name}</p>
    </div>
  );
}

export default Hero;
