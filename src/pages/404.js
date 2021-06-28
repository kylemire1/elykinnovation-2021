import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { darken } from 'polished'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { Container, SoloHeading } from '../components/styled/global'

import vars from '../vars'

const NotFoundWrapper = styled.div`
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 40em;

  a {
    color: ${vars.colorGreenSmallSubpage};
    transition: color 250ms ${vars.ease};
    :hover {
      color: ${darken(0.2, vars.colorGreenSmallSubpage)};
      transition: color 250ms ${vars.ease};
    }
  }
`

const NotFoundHeading = styled(SoloHeading)`
  font-size: clamp(${vars.fontSizeHeading4}, 10vw, 20rem);
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Page Not Found | Elyk Innovation" />
      <Container>
        <NotFoundWrapper>
          <NotFoundContent>
            <NotFoundHeading color={vars.colorAlmostBlack}>
              Woops!
            </NotFoundHeading>
            <p>
              You just tried to go somewhere that doesn't exist.{' '}
              <Link to="/">Head back to the home page</Link>, or{' '}
              <Link to="/contact">contact us</Link> if you need assistance.
            </p>
          </NotFoundContent>
        </NotFoundWrapper>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
