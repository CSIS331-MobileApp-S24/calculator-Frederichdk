import React from "react";
import "./ButtonBox.css";
import Button from "./Button";

function handleClick(buttonVal){
    console.log(buttonVal);
}

const ButtonBox = () =>{
    const btnValues = [
        ["C", "+/-", "%", "/"], 
        ["7", "8", "9", "*"],   
        ["4", "5", "6", "-"],    
        ["1", "2", "3", "+"],    
        ["0", ".", "="]          
    ];

    return(


        <div className="buttonBox">
           {btnValues.flat().map((button, i) =>{
                return(
                    <Button key={i} values={button} className={button} onClicked={() => handleClick(button)}/>
                );
           })}
        </div>
    );
    
};

export default ButtonBox;