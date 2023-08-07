import { useLocation } from "react-router-dom"
import {
  useGetShareholderQuery,
  useGetTransfersQuery,
} from "../../graphql/generated"
import Spacer from "../../components/Spacer/Spacer"
import { Fragment } from "react"
import { styled } from "styled-components"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
`

const StyledValue = styled.p`
  border-bottom: 1px solid #52375d;
  padding-top: 10px;
  padding-bottom: 10px;
`
const StyledTitle = styled.b`
  border-bottom: 2px solid #52375d;
  padding-top: 10px;
  padding-bottom: 10px;
`
const StyledName = styled.h3`
  border-bottom: 2px solid #52375d;
  display: inline-block;
  margin-bottom: 10px;
`

const Wallet = () => {
  const { pathname } = useLocation()
  const shareholderId = pathname.split("/").pop() || ""

  const { data, loading, error } = useGetTransfersQuery({
    variables: { shareholder_id: shareholderId },
    fetchPolicy: "cache-only",
  })

  const { data: shareholderData } = useGetShareholderQuery({
    variables: { shareholder_id: shareholderId },
    fetchPolicy: "cache-first",
  })

  const shareholder = shareholderData?.get_shareholder

  const transfers = data?.get_transfers.transfers || []

  const currency = data?.get_transfers.balance.currency || ""

  const balance = (data?.get_transfers.balance.value || 0) + currency

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
      <h2>Wallet</h2>
      <Spacer height="30px" />
      <StyledName>
        {shareholder?.first_name} {shareholder?.last_name}
      </StyledName>
      <h3>🎬 {shareholder?.movie.title}</h3>
      <h3>💰 {new Intl.NumberFormat().format(parseInt(balance))}</h3>
      <Spacer height="30px" />

      {transfers.length ? (
        <>
          <StyledGrid>
            <StyledTitle>📋 Description</StyledTitle>
            <StyledTitle>💸 Share value({currency})</StyledTitle>

            {transfers.map((transfer, index) => (
              <Fragment key={index}>
                <StyledValue>{transfer?.description}</StyledValue>
                <StyledValue>
                  {new Intl.NumberFormat().format(transfer?.amount || 0)}
                </StyledValue>
              </Fragment>
            ))}
          </StyledGrid>
        </>
      ) : (
        <h4>😔 There are no transfers available</h4>
      )}
    </>
  )
}

export default Wallet
