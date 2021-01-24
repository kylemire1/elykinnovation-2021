import React from 'react'
import styled from 'styled-components'

import vars from '../../vars'

const StyledServiceCardBG = styled.div`
  display: none;
  position: absolute;
  ${({ position }) => (position === 'left' ? 'right: 5.5rem' : 'left: 5.5rem')};
  top: 0;
  z-index: -1;
  height: 42rem;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row-reverse' : 'row'};

  > div {
    background-color: ${vars.colorAlmostBlack};
    border-radius: ${vars.borderRadiusLarge};
    width: 35.75rem;
    box-shadow: ${({ position }) =>
        position === 'left' ? '-0.625rem' : '0.625rem'}
      0 0.938rem #0a0a0aa6;
  }

  div + div {
    ${({ position }) =>
      position === 'left' ? 'margin-right: -30rem;' : 'margin-left: -30rem;'};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: flex;
  }
`

const ServiceCardBG = ({ cardPosition }) => {
  return (
    <StyledServiceCardBG position={cardPosition} aria-hidden>
      <div
        style={{
          opacity: 0.9,
          zIndex: -1,
        }}
      />
      <div
        style={{
          opacity: 0.75,
          zIndex: -2,
        }}
      />
      <div
        style={{
          opacity: 0.5,
          zIndex: -3,
        }}
      />
      <div
        style={{
          opacity: 0.35,
          zIndex: -4,
        }}
      />
    </StyledServiceCardBG>
  )
}

export default ServiceCardBG
