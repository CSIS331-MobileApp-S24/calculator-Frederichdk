import React from "react";
import "./Button.css";

const Button = ({ values, className, onClick }) => {
  let conditionalClass = "button";
  if (className === "=") {
    conditionalClass = "equalButton";
  }
  return (
    <button
      className={`br4 grow white b ${conditionalClass}`}
      onClick={onClick}
    >
      {values}
    </button>
  );
};
export default Button;
