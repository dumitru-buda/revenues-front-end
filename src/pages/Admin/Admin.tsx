import { useRef, useState } from "react"
import { styled } from "styled-components"
import {
  useCreateTransferMutation,
  useGetMoviesQuery,
} from "../../graphql/generated"
import Input from "../../components/Input/input"
import Spacer from "../../components/Spacer/Spacer"
import AdminSection from "./AdminSection/AdminSection"
import SelectInput from "../../components/SelectInput/SelectInput"
import AddMovieSection from "./AddMovieSection/AddMovieSection"
import AddShareholderSection from "./AddShareholderSection/AddShareholderSection"
import AddTransferSection from "./AddTransferSection/AddTransferSection"

const StyledSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`

const Admin = () => {
  const { data } = useGetMoviesQuery()

  const movieList =
    data?.get_movies.map((movie) => ({
      value: movie?.id || "",
      title: movie?.title || "",
    })) || []

  return (
    <>
      <h2>Admin</h2>
      <Spacer height="30px" />
      <StyledSectionContainer>
        <AddMovieSection />
        <AddShareholderSection movieList={movieList} />
        <AddTransferSection movieList={movieList} />
      </StyledSectionContainer>
    </>
  )
}

export default Admin
