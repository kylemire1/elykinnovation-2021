import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import LargeServiceCard from './large-service-card'
import { Container, Section } from '../components/styled/global'

import vars from '../vars'

const ServiceGrid = styled.div`
  display: grid;
  gap: 1.5em;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ServiceCardWrapper = styled.div`
  position: relative;
`

const StyledServiceCardBG = styled.div`
  display: none;
  position: absolute;
  right: 5.5rem;
  top: 0;
  z-index: -1;
  height: 46.5rem;
  flex-direction: row;

  > div {
    border-radius: ${vars.borderRadiusLarge};
    width: 35.75rem;
    box-shadow: -5px -5px 30px ${vars.colorBlack};
  }

  div + div {
    margin-left: -30rem;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
  }
`

const SideImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  picture img {
    object-fit: contain !important;
  }
`

const LargeServiceCardSection = ({
  buttonLink,
  buttonText,
  cardContent,
  cardPosition,
  mainHeadingText,
  sideContentType,
  sideText,
  sideImage,
  smallGreenHeadingText,
}) => {
  const imageFluid = sideImage?.localFile?.childImageSharp.fluid

  return (
    <Section>
      <Container>
        <ServiceGrid>
          <ServiceCardWrapper>
            <LargeServiceCard
              cardContent={cardContent}
              mainHeadingText={mainHeadingText}
              smallGreenHeadingText={smallGreenHeadingText}
              buttonLink={buttonLink}
              buttonText={buttonText}
            />
            <ServiceCardBG cardPosition={cardPosition} />
          </ServiceCardWrapper>
          <SideImage>
            <Image backgroundColor={'transparent'} fluid={imageFluid} alt="" />
          </SideImage>
        </ServiceGrid>
      </Container>
    </Section>
  )
}

const ServiceCardBG = ({ cardPosition }) => {
  return (
    <StyledServiceCardBG position={cardPosition} aria-hidden>
      <div style={{ opacity: 0.25 }} />
      <div style={{ opacity: 0.5 }} />
      <div style={{ opacity: 0.75 }} />
      <div style={{ opacity: 0.9 }} />
    </StyledServiceCardBG>
  )
}

export const fragment = graphql`
  fragment LargeServiceCardSection on WpPage_Layoutsections_Components_LargeServiceCardSection {
    buttonLink
    buttonText
    cardContent
    cardPosition
    fieldGroupName
    mainHeadingText
    sideContentType
    sideText
    smallGreenHeadingText
    sideImage {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`

export default LargeServiceCardSection
