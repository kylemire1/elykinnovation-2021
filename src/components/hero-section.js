import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Button from './button'
import { Container } from './styled/global'

import vars from '../vars'

const StyledHero = styled.section`
  position: relative;
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
  background-attachment: scroll;
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

  @media (min-width: ${vars.breakpointLarge}) {
    background-attachment: fixed;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 15%;

  .btn {
    box-shadow: 0 1.25rem 2.5rem #021717;
    font-size: xx-large;
  }
`

const HeroSection = ({ heroImage, heroText, buttonLink, buttonText }) => {
  return (
    <StyledHero bg={heroImage?.sourceUrl}>
      <Container>{heroText && <h1>{heroText}</h1>}</Container>
      {buttonLink && buttonText && (
        <ButtonWrapper>
          <Button elementType="link" buttonStyle="green" href={buttonLink}>
            {buttonText}
          </Button>
        </ButtonWrapper>
      )}
    </StyledHero>
  )
}

export const fragment = graphql`
  fragment HeroSection on WpPage_Layoutsections_Components_HomepageHero {
    fieldGroupName
    buttonLink
    buttonText
    heroText
    heroImage {
      sourceUrl
    }
  }
`

export default HeroSection
