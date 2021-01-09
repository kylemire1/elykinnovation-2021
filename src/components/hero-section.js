import React from 'react'
import styled from 'styled-components'

import vars from '../vars'

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars.colorWhite};
`

const HeroSection = () => {
  return (
    <StyledHero>
      <h1>Client-Driven Web Development by a Team of Innovators</h1>
    </StyledHero>
  )
}

export default HeroSection
