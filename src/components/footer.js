import React from 'react'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Button from './button'
import { Section, Container, SectionHeading } from './styled/global'

import vars from '../vars'
import PhoneIcon from './icons/phone-icon'
import A11yIcon from './icons/a11y-icon'

const StyledFooter = styled.footer``

const FooterSection = styled(Section)`
  background-color: ${({ color }) => color};

  &.md {
    padding: 2rem 0;
  }
  &.sm {
    padding: 1rem 0;
  }
`
const FooterHeading = styled(SectionHeading)`
  color: ${vars.colorBlack};
  font-size: ${vars.fontSizeHeading4};
  font-weight: ${vars.fontWeightBolder};
  margin-bottom: 0;

  span {
    font-weight: ${vars.fontWeightBold};
  }
`

const ContactGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;

  > div:last-child {
    justify-self: start;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: 1.5fr 1fr;

    > div:last-child {
      justify-self: end;
    }
  }
`

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .btn {
    margin: 0;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    align-items: center;
    justify-content: center;
  }
`

const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${vars.fontSizeHeading4};
  font-weight: ${vars.fontWeightBolder};
  color: ${vars.colorBlack};
  text-decoration: none;
  transition: color 250ms ${vars.ease};
  svg {
    fill: ${vars.colorBlack};
    transition: fill 250ms ${vars.ease};
  }

  :hover,
  :focus,
  :focus-within {
    color: ${vars.colorGreen};
    transition: color 250ms ${vars.ease};

    svg {
      fill: ${vars.colorGreen};
      transition: fill 250ms ${vars.ease};
    }
  }

  .icon-left {
    display: none;
  }
  .icon-right {
    margin-left: 1rem;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    .icon-right {
      display: none;
    }
    .icon-left {
      display: block;
      margin-right: 1rem;
    }
  }
`

const StyledOr = styled.div`
  position: relative;
  width: 100%;
  z-index: 99;
  margin: 0rem 0.25rem 0.3rem;

  span {
    text-transform: uppercase;
    color: ${vars.colorBlack};
    font-weight: ${vars.fontWeightBold};
    background-color: ${vars.colorWhite};
    display: inline-block;
    z-index: 1;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    text-align: center;

    span {
      padding: 0 0.25rem;
      font-size: ${vars.fontSizeTextSmall};
      ::after {
        content: '';
        width: 70px;
        height: 1px;
        background-color: ${vars.colorBlack};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        display: block;
      }
    }
  }
`
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

const Footer = () => {
  return (
    <StyledFooter>
      <ContactSection />
      <AccessibilitySection />
    </StyledFooter>
  )
}

const Or = () => (
  <StyledOr>
    <span>Or</span>
  </StyledOr>
)

const ContactSection = () => (
  <FooterSection color={vars.colorWhite}>
    <Container>
      <ContactGrid>
        <div>
          <FooterHeading>
            <span>Ready to get started? </span>We're Looking Forward to Working
            With You
          </FooterHeading>
        </div>
        <ContactInfo>
          <PhoneNumber href="tel:+19049981935">
            <PhoneIcon className="icon-left" />
            <span>904.998.1935</span>
            <PhoneIcon className="icon-right" />
          </PhoneNumber>
          <Or />
          <Button elementType="link" buttonStyle="green" href="/contact-us">
            Contact Us Online
          </Button>
        </ContactInfo>
      </ContactGrid>
    </Container>
  </FooterSection>
)

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

export default Footer
