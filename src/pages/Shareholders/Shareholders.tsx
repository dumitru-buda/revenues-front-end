import { Fragment } from "react"
import Spacer from "../../components/Spacer/Spacer"
import { useGetShareholdersQuery } from "../../graphql/generated"
import Row from "../../components/Row/Row"
import Button from "../../components/Button/Button"
import RouteLInk from "../../components/RouteLink/RouteLink"
import { useNavigation } from "react-router-dom"

const Shareholders = () => {
  const { data, error, loading } = useGetShareholdersQuery()
  const { state } = useNavigation()

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

      {data.get_shareholders.map((shareholder) => (
        <Fragment key={shareholder?.id}>
          <Row>
            <div>{shareholder?.first_name + " " + shareholder?.last_name}</div>
            <Button buttonType="small" disabled={state === "loading"}>
              <RouteLInk route={"/wallet/" + shareholder?.id}>Show</RouteLInk>
            </Button>
          </Row>
        </Fragment>
      ))}
    </>
  )
}

export default Shareholders
