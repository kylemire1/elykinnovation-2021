import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Section, Container, SoloHeading } from '../components/styled/global'

import vars from '../vars'

const SiteMapLink = styled(Link)`
  color: ${vars.colorGreenSmallSubpage};
`

const SiteMap = ({ data }) => {
  const pages = data?.allWpPage?.nodes
  return (
    <Layout>
      <Section bg="colorWhite">
        <Container>
          <SoloHeading color={vars.colorAlmostBlack}>Site Map</SoloHeading>
          <ul>
            {pages &&
              pages.length &&
              pages.map(({ uri, title }) => (
                <li>
                  <SiteMapLink key={uri} to={uri}>
                    {title}
                  </SiteMapLink>
                </li>
              ))}
          </ul>
        </Container>
      </Section>
    </Layout>
  )
}

export const siteMapQuery = graphql`
  query SiteMapQuery {
    allWpPage(sort: { fields: uri, order: ASC }) {
      nodes {
        uri
        title
      }
    }
  }
`

export default SiteMap
