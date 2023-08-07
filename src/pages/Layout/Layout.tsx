import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Spacer from "../../components/Spacer/Spacer"
import { styled } from "styled-components"
import bg from "./bg.png"

const Layout = () => {
  return (
    <>
      <Header />
      <Spacer height="30px" />
      <Outlet />
    </>
  )
}

export default Layout
