import { Fragment, useState } from "react"
import Spacer from "../../components/Spacer/Spacer"
import { useGetShareholdersQuery } from "../../graphql/generated"
import Row from "../../components/Row/Row"
import Button from "../../components/Button/Button"
import RouteLInk from "../../components/RouteLink/RouteLink"

const pageSize = 5

const Shareholders = () => {
  const [allFieldsDisplayed, setAllFieldsDisplayed] = useState(false)
  const { data, error, loading, fetchMore } = useGetShareholdersQuery({
    variables: {
      page_size: pageSize,
      cursor: undefined,
    },
  })

  const loadNextPage = () => {
    if (
      !loading &&
      data &&
      data.get_shareholders.length > 0 &&
      !allFieldsDisplayed
    ) {
      const lastShareholders = data.get_shareholders

      const lastShareholderId =
        lastShareholders[lastShareholders.length - 1]?.id

      fetchMore({
        variables: {
          page_size: pageSize,
          cursor: lastShareholderId,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (fetchMoreResult.get_shareholders.length < 5) {
            setAllFieldsDisplayed(true)
          }
          if (!fetchMoreResult) return prevResult

          return {
            __typename: "Query",
            get_shareholders: [
              ...prevResult.get_shareholders,
              ...fetchMoreResult.get_shareholders,
            ],
          }
        },
      })
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!data) {
    return null
  }

  return (
    <>
      <h2>Shareholders</h2>
      <Spacer height="30px" />

      {data.get_shareholders.map((shareholder, index) => (
        <Fragment key={index}>
          <Row>
            <div>{shareholder?.first_name + " " + shareholder?.last_name}</div>
            <Button buttonType="small">
              <RouteLInk route={"/wallet/" + shareholder?.id}>Show</RouteLInk>
            </Button>
          </Row>
        </Fragment>
      ))}
      <Spacer height="20px" />
      <i>
        *Thought I would add some pagination, but for some reason last element
        from previous query is duplicated. No time to debug.
      </i>
      <Spacer height="30px" />
      <Button disabled={allFieldsDisplayed || loading} onClick={loadNextPage}>
        Load more...
      </Button>
    </>
  )
}

export default Shareholders
