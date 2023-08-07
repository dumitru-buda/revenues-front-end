import { Ref, SelectHTMLAttributes } from "react"
import { styled } from "styled-components"
import Spacer from "../Spacer/Spacer"

const StyledSelect = styled.select`
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

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  selectRef: Ref<HTMLSelectElement>
  label: string
  options?: { value: string; title: string }[]
}

const SelectInput = ({ selectRef, label, options, ...props }: Props) => {
  return (
    <>
      <label>{label}</label>
      <Spacer height="14px" />
      <StyledSelect ref={selectRef} defaultValue="0" {...props}>
        <option value="0" disabled>
          {props.placeholder}
        </option>
        {options
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))
          : null}
      </StyledSelect>
    </>
  )
}

export default SelectInput
