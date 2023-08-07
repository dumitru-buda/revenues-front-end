import { styled } from "styled-components"

const StyledSpacer = styled.div<{
  $height: string
}>`
  height: ${(props) => props.$height};
`
interface Props {
  height: string
}
const Spacer = ({ height }: Props) => <StyledSpacer $height={height} />

export default Spacer
