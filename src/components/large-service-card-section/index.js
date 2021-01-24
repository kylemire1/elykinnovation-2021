import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import LargeServiceCard from './large-service-card'
import ServiceCardBG from './service-card-bg'
import SideContent from './side-content'
import { Container, Section } from '../styled/global'

import vars from '../../vars'

const ServiceGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);

    > div:first-child {
      order: ${({ position }) => (position === 'left' ? 1 : 2)};
    }

    > div:last-child {
      order: ${({ position }) => (position === 'left' ? 2 : 1)};
    }
  }
`

const ServiceCardWrapper = styled.div`
  position: relative;
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
  extraPadding,
}) => {
  const sideImageData = {
    desktop: sideImage?.localFile?.childImageSharp?.desktop,
    mobile: sideImage?.localFile?.childImageSharp?.mobile,
    altText: sideImage?.altText,
  }

  return (
    <Section>
      <Container>
        <ServiceGrid position={cardPosition}>
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
          <SideContent
            sideImage={sideImageData}
            sideText={sideText}
            sideContentType={sideContentType}
            cardPosition={cardPosition}
            extraPadding={extraPadding}
          />
        </ServiceGrid>
      </Container>
    </Section>
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
    extraPadding
    sideImage {
      altText
      localFile {
        childImageSharp {
          desktop: fixed(width: 572) {
            ...GatsbyImageSharpFixed_noBase64
          }
          mobile: fixed(width: 350) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  }
`

export default LargeServiceCardSection
