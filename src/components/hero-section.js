import React from 'react'
import styled from 'styled-components'

import { Container } from './styled/global'

import vars from '../vars'

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars.colorWhite};
  background-image: url(${props => props.bg});
  background-color: ${vars.colorAlmostBlack};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: overlay;
  z-index: 0;

  h1 {
    font-size: 3.75rem;
    text-align: center;
  }
`

const HeroSection = ({ image }) => {
  return (
    <StyledHero bg={image}>
      <Container>
        <h1>Client-Driven Web Development by a Team of Innovators</h1>
      </Container>
    </StyledHero>
  )
}

export default HeroSection
