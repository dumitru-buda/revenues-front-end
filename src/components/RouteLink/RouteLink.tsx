import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

const StyledLink = styled.div.attrs(() => ({ tabIndex: 0 }))`
  .link {
    color: #fff;
    font-size: 14px;
    @media screen and (min-width: 425px) {
      font-size: 16px;
    }
  }
`

interface Props {
  route: string
}

const RouteLInk = ({ route, children }: PropsWithChildren<Props>) => {
  return (
    <StyledLink>
      <Link to={route} className="link">
        {children}
      </Link>
    </StyledLink>
  )
}

export default RouteLInk
