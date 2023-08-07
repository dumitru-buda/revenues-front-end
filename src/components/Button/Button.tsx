import { ButtonHTMLAttributes, ReactNode } from "react"
import { styled } from "styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary" | "small"
  children: ReactNode
}

const StyledButton = styled.button<{
  $secondary?: boolean
  $small?: boolean
  $disabled?: boolean
}>`
  background-image: ${(props) =>
    props.$disabled
      ? "linear-gradient(135deg, #383838, #a0a0a0)"
      : "linear-gradient(135deg, #3e294f, #db6e6b)"};
  border: 2px solid transparent;
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.$secondary ? "inset 1px 1000px 1px #110c12" : "none"};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.15s ease;
  min-width: 80px;
  height: 40px;
  background-clip: border-box;
  background-origin: border-box;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 425px) {
    min-width: 100px;
    height: ${(props) => (props.$small ? "40px" : "60px")};
    font-weight: 600;
    font-size: 16px;
    padding-left: 14px;
    padding-right: 14px;
  }
`

const Button = ({
  buttonType = "primary",
  disabled,
  children,
  ...props
}: Props) => {
  return (
    <StyledButton
      $secondary={buttonType === "secondary"}
      $small={buttonType === "small"}
      $disabled={disabled || false}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
