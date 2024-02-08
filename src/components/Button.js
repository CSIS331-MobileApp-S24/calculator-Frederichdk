import React from "react";
import "./Button.css";

const Button = ({values, className, onClicked}) =>{

    let conditionalClass = "button";
    if (className === "=") {
        conditionalClass = "equalButton";
    }
    return(
            <button className={`br4 grow white b ${conditionalClass}`}  onClick={onClicked}>{values}</button>
    );
};
export default Button;