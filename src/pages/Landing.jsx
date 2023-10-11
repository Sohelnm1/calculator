import React, { useEffect, useState } from "react";
import ButtonCom from "../common/ButtonCom";
import Input from "../common/Input";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  background-color: #3b4665;
  border: 5px solid #fff;
  max-width: 425px;
  height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .common-css-container {
    // margin: 20px;
  }
  .total-operation,
  .result-container {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin: 15px 0 15px 0;
    background-color: #181e33;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    &:hover {
      color: red;
    }
  }
  .inputs-container {
    margin: 15px 0 15px 0;
  }

  .operator {
    color: black;
    background-color: #fff;
    margin: 13px 0;
    font-size: 23px;
    font-weight: 500;
    padding: 1px 115px;
    width: 100%;
    text-align: center;
    border-radius: 4px;
  }
  .operator-class {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result-container {
    font-size: 15px;
    transform: translateY(0px); /* Move the element 20px up initially */
    transition: opacity 250ms ease, transform 250ms ease, margin-top 250ms ease;
  }
`;

const MathFunction = ["+", "-", "*", "/"];

function Landing() {
  const [inputVal, setInputVal] = useState({
    input1: "",
    input2: "",
  });

  const [output, setOutput] = useState("");

  const [operations, setOperation] = useState(0);

  let name, value;
  const handleOnchange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputVal({ ...inputVal, [name]: value });
    console.log(inputVal);
  };

  const [operatorVal, setOperatorVal] = useState("+");

  const [displayproperty, setDisplayProperty] = useState(0);

  const handleOperatorClick = (operator) => {
    console.log(operator);
    setOperatorVal(operator);
  };

  const operatorFunctions = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  useEffect(() => {
    const input1 = parseFloat(inputVal.input1);
    const input2 = parseFloat(inputVal.input2);

    if (operatorFunctions[operatorVal]) {
      const result = operatorFunctions[operatorVal](input1, input2);
      setOutput(result);
      console.log(result);
    } else {
      console.error("Invalid operator");
    }
  }, [inputVal, operatorVal]);

  useEffect(() => {
    if (inputVal.input1 !== "" && inputVal.input2 !== "" && output !== null) {
      setOperation(operations + 1);
      setDisplayProperty(1);
    } else {
      console.log("nothing");
      setDisplayProperty(0);
    }
  }, [output]);

  const handleReset = () => {
    setDisplayProperty(0);
    setInputVal({ input1: "", input2: "" });
    setOutput("");
    setOperatorVal("+");
  };

  return (
    <>
      <WrapperStyled className="container">
        <label htmlFor="total-operation" className="total-operation">
          Operation Performed: <strong> {operations}</strong>
        </label>

        <div className="common-css-container inputs-container">
          <Input
            onChangeInput={handleOnchange}
            value={inputVal.input1}
            intype="number"
            nametag="input1"
            width="100%"
            placeholderinput="Enter First Number"
          />
          <label htmlFor="operator" className="operator">
            {" "}
            {operatorVal}{" "}
          </label>

          <Input
            onChangeInput={handleOnchange}
            value={inputVal.input2}
            intype="number"
            nametag="input2"
            width="100%"
            placeholderinput="Enter Second Number"
          />
        </div>
        <div className="common-css-container operator-class">
          {MathFunction.map((ele) => {
            return (
              <>
                <ButtonCom
                  key={ele}
                  buttontxt={ele}
                  onClickEvent={() => handleOperatorClick(ele)}
                />
              </>
            );
          })}
        </div>
        <div className="">
          {displayproperty === 1 ? (
            <label htmlFor="output" className="result-container">
              {" "}
              Result : {output}{" "}
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="reset-result common-css-container d-flex justify-content-center align-items-center">
          <ButtonCom
            buttontxt="Reset"
            btype="reset"
            onClickEvent={handleReset}
            padding="5px 50px"
            bradius="6px"
            margin="23px 0"
          />
        </div>
      </WrapperStyled>
    </>
  );
}

export default Landing;
