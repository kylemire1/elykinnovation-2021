import React from 'react'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

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
  width: 30px;
  margin-left: 1rem;
  margin-bottom: -0.75rem;

  @media (min-width: ${vars.breakpointLarge}) {
    width: 57px;
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
`

const AccessibilitySection = () => {
  const breakpoints = useBreakpoint()

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
            <p>
              Elyk Innovation Inc. is committed to keeping our site accessible
              to everyone. We welcome feedback on ways to improve the site’s
              accessibility. Learn more about our website accessibility
              services.
            </p>
          </AccessibilityStatement>
        </AccessibilityRow>
      </Container>
    </FooterSection>
  )
}

export default AccessibilitySection
