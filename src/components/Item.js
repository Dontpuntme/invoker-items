import React from "react";
import Items from "../resources/itemImages.json";
import IconBar from "./IconBar";

function Hero () {
    return (<IconBar data = {Items} placeholder = "Enter an item name..." ></IconBar>);
}

export default Hero;