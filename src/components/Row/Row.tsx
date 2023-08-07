import { styled } from "styled-components"
import { PropsWithChildren } from "react"

const StyledRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #52375d;
`

const Row = ({ children }: PropsWithChildren) => {
  return <StyledRowContainer>{children}</StyledRowContainer>
}

export default Row
