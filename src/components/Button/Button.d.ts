import { HtmlHTMLAttributes } from "react";

export type ButtonVariants = "default" | "outline" | "text";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  disableShadow?: boolean;
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
}

interface ButtonIconProps {
  icon: React.ElementType;
}
