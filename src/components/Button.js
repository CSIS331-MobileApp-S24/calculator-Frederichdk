import React from "react";
import "./Button.css";

const Button = ({values, className, onClicked}) =>{

    let conditionalClass = "";
    if (className === "=") {
        conditionalClass = "equalButton";
    }
    return(
        
            <button className={`br4 grow bg-purple white b ${conditionalClass}`}  onClick={onClicked}>{values}</button>
    

    );
};
export default Button;