import { InputHTMLAttributes, Ref } from "react"
import { styled } from "styled-components"
import Spacer from "../Spacer/Spacer"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: Ref<HTMLInputElement>
  label: string
}

const StyledInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  padding: 14px;
  border-radius: 5px;
  border-style: none;
  &:focus {
    border: none;
  }
  width: 100%;
`

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
`

const StyledLabel = styled.label`
  font-size: 14px;
`

const Input = ({ inputRef, label, ...props }: Props) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Spacer height="4px" />
      <div>
        <StyledInput {...props} ref={inputRef} />
      </div>
    </StyledContainer>
  )
}

export default Input
