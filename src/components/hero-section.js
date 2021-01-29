import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from './styled/global'

import vars from '../vars'

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars.colorWhite};
  background-image: url(${({ bg }) => bg});
  background-color: ${vars.colorAlmostBlack};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: overlay;
  z-index: 0;

  h1 {
    font-size: ${vars.fontSizeHeading3};
    text-align: center;
    line-height: 1.3;
    font-weight: ${vars.fontWeightNormal};

    @media (min-width: ${vars.breakpointLarge}) {
      font-size: ${vars.fontSizeHeading7};
    }
  }
`

const HeroSection = ({ heroImage, heroText }) => {
  return (
    <StyledHero bg={heroImage?.sourceUrl}>
      <Container>{heroText && <h1>{heroText}</h1>}</Container>
    </StyledHero>
  )
}

export const fragment = graphql`
  fragment HeroSection on WpPage_Layoutsections_Components_HomepageHero {
    fieldGroupName
    heroText
    heroImage {
      sourceUrl
    }
  }
`

export default HeroSection
