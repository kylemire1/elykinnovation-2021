import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from './styled/global'

import vars from '../vars'
import heroBgSrc from '../../content/assets/subpage-hero-small-bg.svg'

const StyledHero = styled.section`
  min-height: 14.5rem;
  display: flex;
  align-items: center;
  background-color: ${vars.colorAlmostBlack};
  background-image: url(${heroBgSrc});
  background-repeat: no-repeat;
  background-position: top -${vars.pixel} center;
`

const Heading = styled.h1`
  font-size: ${vars.fontSizeHeading6};
  margin-bottom: 0;

  @media (min-width: ${vars.breakpointLarge}) {
    font-size: ${vars.fontSizeHeading7};
  }
`

const SubpageHeroSmall = ({ headingText }) => {
  return (
    <StyledHero>
      <Container>
        <Heading>{headingText}</Heading>
      </Container>
    </StyledHero>
  )
}

export const fragment = graphql`
  fragment SubpageHeroSmall on WpPage_Layoutsections_Components_SubpageHeroSmall {
    fieldGroupName
    headingText
  }
`

export default SubpageHeroSmall
