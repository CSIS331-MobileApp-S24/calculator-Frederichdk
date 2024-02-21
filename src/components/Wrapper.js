import React, { useState } from "react";
import "./Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Wrapper = () => {
  let [num, setNum] = useState(0);
  let [res, setRes] = useState(0);
  let [oper, setOper] = useState(0);
  function onButtonClick(event) {
    // console.log(event.target.innerHTML);
    let value = event.target.innerHTML;
    switch (value) {
      case "C":
        resetClickerHandler();
        break;
      case "+-":
        invertClickerHandler();
        break;
      case "%":
        percentClickerHandler();
        break;
      case "+":
      case "-":
      case "X":
      case "/":
        operClickerHandler(value);
        break;
      case "=":
        equalClickerHandler();
        break;
      case ".":
        decClickerHandler();
        break;
      default:
        numClickerHandler(value);
        break;
    }
    console.log("after the handlers");
    console.log("num: " + num);
    console.log("res: " + res);
    console.log("Oper: " + oper);
  }

  const resetClickerHandler = (btn) => {
    console.log("in resetClickerHandler");
    console.log(btn);
    setNum(0);
    setOper("");
    setRes(0);
  };
  const invertClickerHandler = (btn) => {
    console.log("in invertClickerHandler");
    console.log(btn);

    let newval;
    newval = num * -1;
    setNum(newval);
  };
  const percentClickerHandler = (btn) => {
    console.log("in percentClickerHandler");
    console.log(btn);

    let newval;
    newval = num / 100;

    if (num.toString().length < 13) {
      setNum(newval);
    } else {
      newval = num.toExponential(9);
      setNum(newval);
    }
  };
  const operClickerHandler = (btn) => {
    console.log("in operClickerHandler");
    setOper(btn);
    let ans;

    if (btn.toString() === "+") {
      console.log("the button is +");
      ans = res + num;
      setRes(ans);
      setNum(0);
    }
    if (btn.toString() === "-") {
      console.log("the button is -");
      ans = res - num;
      setRes(ans);
      setNum(0);
    }
    if (btn.toString() === "X") {
      console.log("the button is X");
      ans = res * num;
      setRes(ans);
      setNum(0);
    }
    if (btn.toString() === "/") {
      console.log("the button is /");
      ans = res / num;
      setRes(ans);
      setNum(0);
    }
  };
  const equalClickerHandler = (btn) => {
    console.log("in equalClickerHandler");
    console.log(btn);
    setRes(res);
    setNum(0);
  };
  const decClickerHandler = (btn) => {
    console.log("in decClickerHandler");
    console.log(btn);
  };
  const numClickerHandler = (btn) => {
    console.log("in numClickerHandler");
    console.log(btn);

    let newval;
    if (num.toString().length < 13) {
      newval = num + btn;
      newval = Number(newval);
      setNum(newval);
    }
  };

  return (
    <div className="wrapper bg-dark-gray pa3 br2">
      <Screen value={num === 0 ? res : num} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
