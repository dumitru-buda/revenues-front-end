import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { ReactComponent as FilmChainLogo } from "./logo.svg"
import Button from "../../../components/Button/Button"
import RouteLInk from "../../../components/RouteLink/RouteLink"

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: center;
  align-items: center;
`

const linkStyle = {
  color: "#fff",
}

const StyledLeftContainer = styled.div`
  display: flex;
  gap: 10px;
`

const StyledLogo = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 100px;
  @media screen and (min-width: 425px) {
    width: 150px;
  }
  .logo-text {
    display: none;
    @media screen and (min-width: 425px) {
      display: block;
    }
  }
`

const Header = () => {
  return (
    <StyledNav>
      <RouteLInk route="/">
        <StyledLogo>
          <FilmChainLogo />
        </StyledLogo>
      </RouteLInk>

      <StyledLeftContainer>
        <Link to="/shareholders" style={linkStyle}>
          <Button buttonType="secondary">Shareholders</Button>
        </Link>
        <Link to="/admin" style={linkStyle}>
          <Button>Admin</Button>
        </Link>
      </StyledLeftContainer>
    </StyledNav>
  )
}

export default Header
