import React from "react";
import Heroes from "../resources/heroImages.json";
import IconBar from "./IconBar";

function Hero () {
    return (<IconBar data = {Heroes} placeholder = "Enter a hero name..." ></IconBar>);
}

export default Hero;