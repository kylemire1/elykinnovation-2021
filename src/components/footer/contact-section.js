import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Button from '../button'
import PhoneIcon from '../icons/phone-icon'
import { FooterSection } from './index'
import { Container, SectionHeading } from '../styled/global'

import vars from '../../vars'

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

const FooterHeading = styled(SectionHeading)`
  color: ${vars.colorBlack};
  font-size: ${vars.fontSizeHeading4};
  font-weight: ${vars.fontWeightBolder};
  margin-bottom: 0;
  text-transform: capitalize;

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

const StyledOr = styled.div`
  position: relative;
  width: 100%;
  z-index: 99;
  margin: 0.3rem 0.25rem 0.75rem;

  span {
    text-transform: uppercase;
    color: ${vars.colorBlack};
    font-weight: ${vars.fontWeightBold};
    background-color: ${vars.colorPureWhite};
    display: inline-block;
    z-index: 1;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    text-align: center;
    margin: 0 0.25rem 0.3rem;
    span {
      padding: 0 0.25rem;
      font-size: ${vars.fontSizeTextSmall};
      ::after {
        content: '';
        width: 4.375rem;
        height: ${vars.pixel};
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

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query ContactFooterData {
      wpSiteFooter(id: { eq: "cG9zdDozMTA=" }) {
        id
        footerFields {
          contactButtonLink
          contactButtonText
          mainHeadingText
          phoneNumber
          smallGreenHeadingText
        }
      }
    }
  `)

  const {
    contactButtonLink,
    contactButtonText,
    mainHeadingText,
    phoneNumber,
    smallGreenHeadingText,
  } = data?.wpSiteFooter?.footerFields

  /** Phone number with non-digit characters removed for the href */
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '')

  return (
    <FooterSection color={vars.colorPureWhite}>
      <Container>
        <ContactGrid>
          <div>
            <FooterHeading bg="colorWhite">
              <span>{smallGreenHeadingText} </span>
              {mainHeadingText}
            </FooterHeading>
          </div>
          <ContactInfo>
            <PhoneNumber href={`tel:+1${formattedPhoneNumber}`}>
              <PhoneIcon className="icon-left" />
              <span>{phoneNumber}</span>
              <PhoneIcon className="icon-right" />
            </PhoneNumber>
            <Or />
            <Button
              elementType="link"
              buttonStyle="green"
              href={contactButtonLink}
            >
              {contactButtonText}
            </Button>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </FooterSection>
  )
}

const Or = () => (
  <StyledOr>
    <span>Or</span>
  </StyledOr>
)

export default ContactSection
