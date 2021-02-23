import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { rgba } from 'polished'

import PinIcon from '../icons/pin-icon'
import PhoneIcon from '../icons/phone-icon'

import vars from '../../vars'
import useContactInfo from '../../utils/hooks/useContactInfo'

const StyledContactItem = styled.a`
  border-radius: ${vars.borderRadiusLarge};
  color: ${vars.colorWhite};
  text-decoration: none;
  background-color: ${rgba(vars.colorGreen, 0)};
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  :hover,
  :focus {
    background-color: ${rgba(vars.colorGreen, 1)};
    transition: background-color 250ms ${vars.ease};
  }

  .line {
    &__1,
    &__2,
    &__3 {
      display: block;
      width: 100%;
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    height: 100%;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  svg {
    width: 100%;
    max-width: 50px;
    fill: ${vars.colorWhite};
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ContactItem = ({ contactType, contactInfo, contactLink }) => {
  // This is a custom hook to query for menu data.
  // Hooks are a built-in tool of React that let us separate a lot of the business logic out of our components and let them just worry about displaying the template.
  // See https://reactjs.org/docs/hooks-custom.html for more info
  const { info } = useContactInfo(contactType, contactInfo)

  return (
    <StyledContactItem
      href={contactLink}
      rel="noopener noreferrer"
      target={`${contactType === 'phoneNumber' ? '_self' : '_blank'}`}
    >
      <IconWrapper aria-hidden>
        {contactType === 'address' ? <PinIcon /> : <PhoneIcon />}
      </IconWrapper>
      <InfoWrapper>
        <div>{info && parse(`${info}`)}</div>
      </InfoWrapper>
    </StyledContactItem>
  )
}

export default ContactItem
