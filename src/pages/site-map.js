import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Section, Container, SoloHeading } from '../components/styled/global'

import vars from '../vars'
import bullet from '../../content/assets/bullet.png'

const SiteMapLink = styled(Link)`
  color: ${vars.colorGreenSmallSubpage};
`

const SiteMap = () => {
  const result = useStaticQuery(graphql`
    query SiteMapQuery {
      allWpPage(sort: { fields: title, order: ASC }) {
        nodes {
          uri
          title
        }
      }
    }
  `)
  const pages = result?.allWpPage?.nodes
  return (
    <Layout>
      <Section bg="colorBlack">
        <Container>
          <SoloHeading color={vars.colorWhite}>Site Map</SoloHeading>
          <StyledList>
            {pages &&
              pages.length &&
              pages.map(({ uri, title }) => (
                <li>
                  <SiteMapLink key={uri} to={uri}>
                    {title}
                  </SiteMapLink>
                </li>
              ))}
          </StyledList>
        </Container>
      </Section>
    </Layout>
  )
}

const StyledList = styled.ul`
  li {
    background-image: url(${bullet}) !important;
  }
`

export default SiteMap
