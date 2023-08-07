import { useRef, useState } from "react"
import Input from "../../../components/Input/input"
import { useCreateMovieMutation } from "../../../graphql/generated"
import AdminSection from "../AdminSection/AdminSection"

const AddMovieSection = () => {
  const movieTitleInput = useRef<HTMLInputElement>(null)
  const [createMovieSuccessMessage, setCreateMovieSuccessMessage] = useState("")
  const [createMovieErrorMessage, setCreateMovieErrorMessage] = useState("")

  const [createMovie, createMovieData] = useCreateMovieMutation({
    onCompleted: (data) => {
      if (data.create_movie?.success) {
        setCreateMovieSuccessMessage(
          `Movie ${movieTitleInput.current?.value} created successfully!`
        )
      }
      if (movieTitleInput.current) {
        movieTitleInput.current.value = ""
      }
    },
  })

  const onCreateMovieSubmit = () => {
    if (movieTitleInput.current?.value) {
      createMovie({ variables: { title: movieTitleInput.current?.value } })
    } else {
      setCreateMovieErrorMessage("Please enter movie title")
    }
  }
  return (
    <AdminSection
      loading={createMovieData.loading}
      onCreate={onCreateMovieSubmit}
      title="🎬 Add movie"
      successMessage={createMovieSuccessMessage}
      errorMessage={createMovieErrorMessage}
    >
      <Input
        inputRef={movieTitleInput}
        type="text"
        placeholder="Enter movie title"
        label="Title"
      />
    </AdminSection>
  )
}

export default AddMovieSection
