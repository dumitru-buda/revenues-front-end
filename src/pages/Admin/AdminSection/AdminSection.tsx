import { PropsWithChildren } from "react"
import { styled } from "styled-components"
import Spacer from "../../../components/Spacer/Spacer"
import Button from "../../../components/Button/Button"

interface Props {
  title: string
  successMessage: string
  errorMessage: string
  onCreate: () => void
  loading: boolean
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 320px;
`

const AdminSection = ({
  title,
  successMessage,
  errorMessage,
  onCreate,
  children,
  loading,
}: PropsWithChildren<Props>) => {
  return (
    <StyledSection>
      <h4>{title}</h4>

      <Spacer height="20px" />

      {children}

      <div>
        <Spacer height="40px" />
        <Button onClick={onCreate} disabled={loading}>
          Create
        </Button>
      </div>
      <Spacer height="20px" />
      {successMessage && <h5>{successMessage}</h5>}
      {errorMessage && <h5>{errorMessage}</h5>}
    </StyledSection>
  )
}

export default AdminSection
