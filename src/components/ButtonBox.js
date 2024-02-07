import React from "react";
import "./ButtonBox.css";
import Button from "./Button";

const ButtonBox = () =>{
    return(
        <div className="buttonBox">
            <Button values="1"/>
            <Button values="2"/>
        </div>
    );
    
};

export default ButtonBox;