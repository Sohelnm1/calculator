import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  color: ${(props) => props.color || "black "};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  margin: ${(props) => props.margin || "0px 3px"};
  font-size: ${(props) => props.fontSize || "23px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  padding: ${(props) => props.padding || "11px 22px"};
  text-align: ${(props) => props.textAlign || "center"};
  border-radius: ${(props) => props.bradius || "30px 30px 30px 30px"};
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    background-color: #f0a251;
    color: #fff;
  }
`;

function ButtonCom({
  btype = "",
  buttontxt = "",
  onClickEvent = "",
  backgroundColor,
  margin,
  fontSize,
  fontWeight,
  padding,
  textAlign,
  bradius,
  color,
}) {
  return (
    <>
      <ButtonStyled
        type={btype}
        onClick={onClickEvent}
        backgroundColor={backgroundColor}
        margin={margin}
        fontSize={fontSize}
        fontWeight={fontWeight}
        padding={padding}
        textAlign={textAlign}
        bradius={bradius}
        color={color}
      >
        {buttontxt}
      </ButtonStyled>
    </>
  );
}

export default ButtonCom;
