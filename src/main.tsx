import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Layout from "./pages/Layout/Layout.tsx"
import Admin from "./pages/Admin/Admin.tsx"
import Wallet from "./pages/Wallet/Wallet.tsx"
import { loader } from "./pages/Wallet/loader.ts"
import Shareholders from "./pages/Shareholders/Shareholders.tsx"

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "shareholders",
        element: <Shareholders />,
      },
      {
        path: "wallet/:shareholderId",
        element: <Wallet />,
        loader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
