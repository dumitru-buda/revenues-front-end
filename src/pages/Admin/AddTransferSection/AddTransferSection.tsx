import { useRef, useState } from "react"
import Input from "../../../components/Input/input"
import { useCreateTransferMutation } from "../../../graphql/generated"
import AdminSection from "../AdminSection/AdminSection"
import Spacer from "../../../components/Spacer/Spacer"
import SelectInput from "../../../components/SelectInput/SelectInput"

interface Props {
  movieList: { value: string; title: string }[]
}

const AddTransferSection = ({ movieList }: Props) => {
  const amountInput = useRef<HTMLInputElement>(null)
  const descriptionInput = useRef<HTMLInputElement>(null)
  const transferMovieInput = useRef<HTMLSelectElement>(null)

  const [createTransferSuccessMessage, setCreateTransferSuccessMessage] =
    useState("")
  const [createTransferErrorMessage, setCreateTransferErrorMessage] =
    useState("")

  const [createTransfer, createTransferData] = useCreateTransferMutation({
    onCompleted: (data) => {
      if (data.create_transfer?.success) {
        setCreateTransferSuccessMessage(`🤑 Transfer created successfully!`)
        setCreateTransferErrorMessage("")
      }
      if (
        amountInput.current &&
        descriptionInput.current &&
        transferMovieInput.current
      ) {
        amountInput.current.value = ""
        descriptionInput.current.value = ""
        transferMovieInput.current.value = "0"
      }
    },
  })

  const onCreateTransferSubmit = () => {
    if (
      amountInput.current?.value &&
      descriptionInput.current?.value &&
      transferMovieInput.current?.value
    ) {
      createTransfer({
        variables: {
          amount: Number(amountInput.current.value),
          description: descriptionInput.current.value,
          movie_id: transferMovieInput.current.value,
        },
      })
    } else {
      setCreateTransferErrorMessage("Please enter all transfer's details")
      setCreateTransferSuccessMessage("")
    }
  }
  return (
    <AdminSection
      title="💸 Add transfer"
      onCreate={onCreateTransferSubmit}
      loading={createTransferData.loading}
      successMessage={createTransferSuccessMessage}
      errorMessage={createTransferErrorMessage}
    >
      <Input
        inputRef={amountInput}
        type="number"
        placeholder="Enter amount"
        label="Amount"
      />

      <Spacer height="20px" />

      <Input
        inputRef={descriptionInput}
        type="text"
        placeholder="Enter description"
        label="Description"
      />
      <Spacer height="20px" />

      <SelectInput
        label="Movie"
        selectRef={transferMovieInput}
        options={movieList}
        placeholder="Select a movie"
      />
    </AdminSection>
  )
}

export default AddTransferSection
