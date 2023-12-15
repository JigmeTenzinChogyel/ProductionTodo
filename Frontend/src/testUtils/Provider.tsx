import { ApolloProvider } from "@apollo/client"
import { RecoilRoot } from "recoil"
import React from "react"
import client from "../apolloClient"

export const Provider: React.FC= (props) => {
    return (
        <RecoilRoot>
            <ApolloProvider client={client}>
                {props.children}
            </ApolloProvider>
        </RecoilRoot>
    )
}