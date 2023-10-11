import React from "react";
import styled from "@emotion/styled";

const InputStyled = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-right: ${(props) => props.paddingright};
  padding: ${(props) => props.padding || "10px"};
  background-color: ${(props) => props.bcolor || "#181e33"};
  font-size: ${(props) => props.fontsize || "15px"};
  border-radius: ${(props) => props.bradius || "5px"};
  border: none;
  outline: none;
  border-bottom: ${(props) => props.borderb};
  margin: ${(props) => props.margin};
  color: #fff;
  font-weight: 500;

  &::placeholder {
    font-weight: ${(props) => props.placeholderweight};
    font-size: ${(props) => props.placeholderfontsize};
    font-style: italic;
    text-align: left;
    // line-height: 19px;
    // letter-spacing: 0.02em;
    // color: rgba(80, 80, 80, 0.4);
  }
  &:focus,
  &:hover {
    // border-bottom: 1px ridge #7a7a7a;
    // border-bottom: 1px solid;
    // border-color: rgba(0, 0, 0, 0.12);
  }
`;

function Input({
  intype = "",
  value = "",
  nametag = "",
  id = "",
  onChangeInput,
  className,
  paddingright = "",
  borderb = "",
  margin = "",
  placeholderweight = "",
  placeholderfontsize = "",
  width = "",
  height = "",
  fontsize = "",
  padding = "",
  placeholderinput = "",
}) {
  return (
    <>
      <InputStyled
        type={intype}
        value={value}
        id={id}
        name={nametag}
        onChange={onChangeInput}
        className={className}
        width={width}
        height={height}
        paddingright={paddingright}
        borderb={borderb}
        margin={margin}
        placeholderweight={placeholderweight}
        placeholderfontsize={placeholderfontsize}
        fontsize={fontsize}
        padding={padding}
        placeholder={placeholderinput}
      ></InputStyled>
    </>
  );
}

export default Input;
