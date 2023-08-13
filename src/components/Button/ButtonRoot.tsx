import * as S from "./Button.styles";
import { ButtonProps } from "./Button";

const Button = ({
  startIcon: StartIcon,
  endIcon: EndIcon,
  children,
  ...props
}: ButtonProps) => (
  <S.Root {...props}>
    {!!StartIcon && (
      <S.IconContainer {...props}>
        <StartIcon id="buttonId" />
      </S.IconContainer>
    )}
    {children}
    {!!EndIcon && (
      <S.IconContainer {...props}>
        <EndIcon id="buttonId" />
      </S.IconContainer>
    )}
  </S.Root>
);

Button.defaultProps = {
  disabled: false,
  variant: "default",
};

export default Button;
