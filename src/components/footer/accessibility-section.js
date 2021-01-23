import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import parse from 'html-react-parser'

import { FooterSection } from './index'
import { Container } from '../styled/global'

import vars from '../../vars'
import A11yIcon from '../icons/a11y-icon'

const AccessibilityRow = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  width: 1.875rem;
  margin-left: 1rem;
  margin-bottom: -0.75rem;

  @media (min-width: ${vars.breakpointLarge}) {
    width: 3.563rem;
    margin-left: 0;
    margin-bottom: 0;
  }
`

const AccessibilityHeading = styled.h3`
  font-size: ${vars.fontSizeHeading3};
  text-align: center;
  display: flex;
  align-items: center;

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 0.5em;
    margin-bottom: 0;
  }
`

const AccessibilityStatement = styled.div`
  justify-self: end;

  p {
    margin-bottom: 0;
  }

  a {
    color: currentColor;
    opacity: 1;
    transition: opacity 250ms ${vars.ease};

    :hover,
    :focus-within,
    :focus {
      opacity: 0.85;
      transition: opacity 250ms ${vars.ease};
    }
  }
`

const AccessibilitySection = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(graphql`
    query AccessibilityFooterData {
      wpSiteFooter(id: { eq: "cG9zdDozMTA=" }) {
        id
        footerFields {
          accessibilityPolicy
        }
      }
    }
  `)

  const { accessibilityPolicy } = data?.wpSiteFooter?.footerFields

  return (
    <FooterSection className="md" color={vars.colorRed}>
      <Container>
        <AccessibilityRow>
          {breakpoints.lg && (
            <IconWrapper>
              <A11yIcon />
            </IconWrapper>
          )}
          <AccessibilityHeading>
            <span>Accessibility Policy</span>
            {!breakpoints.lg && (
              <IconWrapper>
                <A11yIcon />
              </IconWrapper>
            )}
          </AccessibilityHeading>

          <AccessibilityStatement>
            {parse(accessibilityPolicy)}
          </AccessibilityStatement>
        </AccessibilityRow>
      </Container>
    </FooterSection>
  )
}

export default AccessibilitySection
