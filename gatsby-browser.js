// normalize CSS across browsers
import './src/normalize.css'
import './src/global.scss'

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './contexts/apollo'

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
