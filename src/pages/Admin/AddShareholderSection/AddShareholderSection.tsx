import { useRef, useState } from "react"
import Input from "../../../components/Input/input"
import {
  GetShareholdersDocument,
  useCreateShareholderMutation,
} from "../../../graphql/generated"
import AdminSection from "../AdminSection/AdminSection"
import Spacer from "../../../components/Spacer/Spacer"
import SelectInput from "../../../components/SelectInput/SelectInput"

interface Props {
  movieList: { value: string; title: string }[]
}

const AddShareholderSection = ({ movieList }: Props) => {
  const [createShareholderSuccessMessage, setCreateShareholderSuccessMessage] =
    useState("")
  const [createShareholderErrorMessage, setCreateShareholderErrorMessage] =
    useState("")
  const firstNameInput = useRef<HTMLInputElement>(null)
  const lastNameInput = useRef<HTMLInputElement>(null)
  const addressInput = useRef<HTMLInputElement>(null)
  const ibanInput = useRef<HTMLInputElement>(null)
  const shareholderMovieInput = useRef<HTMLSelectElement>(null)

  const [createShareholder, createShareholderData] =
    useCreateShareholderMutation({
      refetchQueries: [GetShareholdersDocument],
      onCompleted: (data) => {
        if (data.create_shareholder?.success) {
          setCreateShareholderSuccessMessage(
            `Shareholder "${firstNameInput.current?.value} ${lastNameInput.current?.value}" created successfully!`
          )
          setCreateShareholderErrorMessage("")
        }
        if (
          firstNameInput.current &&
          lastNameInput.current &&
          addressInput.current &&
          ibanInput.current &&
          shareholderMovieInput.current
        ) {
          firstNameInput.current.value = ""
          lastNameInput.current.value = ""
          addressInput.current.value = ""
          ibanInput.current.value = ""
          shareholderMovieInput.current.value = "0"
        }
      },
    })

  const onCreateShareholderSubmit = () => {
    if (
      addressInput.current?.value &&
      firstNameInput.current?.value &&
      lastNameInput.current?.value &&
      ibanInput.current?.value &&
      shareholderMovieInput.current?.value
    ) {
      createShareholder({
        variables: {
          data: {
            address: addressInput.current.value,
            first_name: firstNameInput.current.value,
            last_name: lastNameInput.current.value,
            iban: ibanInput.current.value,
            movie_id: shareholderMovieInput.current.value,
          },
        },
      })
    } else {
      setCreateShareholderErrorMessage("Please enter all shareholder's details")
      setCreateShareholderSuccessMessage("")
    }
  }
  return (
    <AdminSection
      title="🍕 Add shareholder"
      onCreate={onCreateShareholderSubmit}
      loading={createShareholderData.loading}
      successMessage={createShareholderSuccessMessage}
      errorMessage={createShareholderErrorMessage}
    >
      <Input
        inputRef={firstNameInput}
        type="text"
        placeholder="Enter first name"
        label="First name"
      />

      <Spacer height="20px" />

      <Input
        inputRef={lastNameInput}
        type="text"
        placeholder="Enter last name"
        label="Last name"
      />

      <Spacer height="20px" />

      <Input
        inputRef={addressInput}
        type="text"
        placeholder="Enter address"
        label="Address"
      />

      <Spacer height="20px" />

      <Input
        inputRef={ibanInput}
        type="text"
        placeholder="Enter IBAN"
        label="IBAN"
      />

      <Spacer height="20px" />

      <SelectInput
        label="Movie"
        selectRef={shareholderMovieInput}
        options={movieList}
        placeholder="Select a movie"
      />
    </AdminSection>
  )
}

export default AddShareholderSection
