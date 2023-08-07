import { LoaderFunctionArgs } from "react-router-dom"
import { client } from "../../main"
import { GetTransfersDocument } from "../../graphql/generated"

// the only way I could find to use the loader just to get the data into apollo cache
// and then use the query hook with cache only policy
// https://community.apollographql.com/t/how-to-load-data-with-react-router-dom-v6-and-handling-errorpage/5347/3#:~:text=setting%20up%20a-,useQuery,-hook%20in%20your
export const loader = async ({ params }: LoaderFunctionArgs) => {
  client.query({
    query: GetTransfersDocument,
    variables: { shareholder_id: params.shareholderId },
  })

  return {}
}