import { CSSProperties } from "react";
import { ButtonProps, ButtonVariants } from "../Button";

export const getButtonStyles = (props: ButtonProps) => {
  const commonsStyles: CSSProperties = {
    width: "88px",
    height: "36px",
    border: "none",
    borderRadius: "6px",
    flexShrink: 0,
    cursor: "pointer",
    background: "transparent",
  };

  const buttonShadow: CSSProperties = {
    boxShadow:
      props.disableShadow || props.variant === "text"
        ? "none"
        : "0px 2px 3px 0px rgba(51, 51, 51, 0.20)",
  };

  const styles: Record<ButtonVariants, CSSProperties> = {
    default: {
      width: "81px",
      background: "#E0E0E0",
    },
    outline: {
      background: "transparent",
      border: "1px solid #3D5AFE",
    },
    text: {},
  };

  return {
    ...commonsStyles,
    ...buttonShadow,
    ...styles[props.variant || "default"],
  };
};

export const getTextButtonStyles = (props: ButtonProps) => {
  const commonsStyles: CSSProperties = {
    textAlign: "center",
    fontFamily: "Noto Sans JP",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    margin: "0 0.5rem",
    color: "#3D5AFE",
  };

  const styles: Record<ButtonVariants, CSSProperties> = {
    default: {
      color: "#3F3F3F",
    },
    outline: {},
    text: {},
  };

  return {
    ...commonsStyles,
    ...styles[props.variant || "default"],
  };
};
