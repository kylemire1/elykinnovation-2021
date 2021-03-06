import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Section, Container, SoloHeading } from '../styled/global'

import vars from '../../vars'
import ContactItem from './contact-item'

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IntroContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IntroText = styled(SoloHeading)`
  width: 100%;
  max-width: 100%;
  text-align: center;
  color: ${vars.colorWhite};
`
const IntroSubText = styled.p`
  color: ${vars.colorWhite};
`

const ContactGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: start;
  justify-items: center;
  max-width: 75%;
  margin-bottom: -2rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ContactUsLayout = ({
  addressLine1,
  addressLine2,
  city,
  introHeading,
  introText,
  state,
  zipcode,
  addressLink,
  phoneNumber,
  phoneNumberLink,
}) => {
  return (
    <Section bg="colorBlack">
      <Container>
        <IntroWrapper>
          <IntroContainer>
            <IntroText>{introHeading}</IntroText>
            <IntroSubText>{introText}</IntroSubText>
            <ContactGrid>
              <ContactItem
                contactType="address"
                contactInfo={{
                  addressLine1,
                  addressLine2,
                  city,
                  state,
                  zipcode,
                }}
                contactLink={addressLink}
              />
              <ContactItem
                contactType="phoneNumber"
                contactInfo={phoneNumber}
                contactLink={phoneNumberLink}
              />
            </ContactGrid>
          </IntroContainer>
        </IntroWrapper>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment ContactUsLayout on WpPage_Layoutsections_Components_ContactUsLayout {
    fieldGroupName
    addressLine1
    addressLine2
    city
    introHeading
    introText
    state
    zipcode
    addressLink
    phoneNumber
    phoneNumberLink
  }
`

export default ContactUsLayout
