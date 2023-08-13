import styled from "styled-components";
import { ButtonProps } from "./Button.d";

const getBorderStyles = (props: ButtonProps) => {
  if (props.variant === "outline") return "1px solid #3D5AFE";
  return "none";
};

const getWidthStyles = (props: ButtonProps) => {
  if (props.variant === "default") return "81px";
  return "88px";
};

const getColorStyles = (props: ButtonProps) => {
  if (props.variant === "default") return "#3F3F3F";
  return "#3D5AFE";
};

const getShadowStyles = (props: ButtonProps) => {
  if (props.disableShadow || props.variant === "text") return "none";

  return "0px 2px 3px 0px rgba(51, 51, 51, 0.2)";
};

const getBackgroundStyles = (props: ButtonProps) => {
  if (props.variant === "default") return "#E0E0E0";

  return "transparent";
};

const getHoverBackgroundStyles = (props: ButtonProps) => {
  if (props.variant === "default") return "#AEAEAE";

  return "rgba(41, 98, 255, 0.10)";
};

export const Root = styled.button<ButtonProps>`
  border: ${(props) => getBorderStyles(props)};
  width: ${(props) => getWidthStyles(props)};
  color: ${(props) => getColorStyles(props)};
  box-shadow: ${(props) => getShadowStyles(props)};
  background: ${(props) => getBackgroundStyles(props)};

  &:hover {
    background: ${(props) => getHoverBackgroundStyles(props)};
  }

  &:focus {
    background: ${(props) => getHoverBackgroundStyles(props)};
  }

  &:disabled {
    color: #9e9e9e;
    background: ${(props) =>
      props.variant === "text" ? "transparent" : "#e0e0e0"};
    box-shadow: "none";
    cursor: default;
  }

  border-radius: 6px;
  height: 36px;
  text-align: center;
  font-family: Noto Sans JP;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const textColors = {
  default: {
    color: "#3F3F3F",
    hover: "#3F3F3F",
    focus: "#3F3F3F",
  },
  outline: {
    color: "#3D5AFE",
    hover: "#3D5AFE",
    focus: "#3D5AFE",
  },
  text: {
    color: "#3D5AFE",
    hover: "#3D5AFE",
    focus: "#3D5AFE",
  },
};

export const IconContainer = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  #buttonId {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${({ variant }) => textColors[variant || "default"].color};
  }
`;
