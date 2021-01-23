import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import parse from 'html-react-parser'
import useDimensions from 'react-use-dimensions'

import LargeServiceCard from './large-service-card'
import { Container, Section } from '../components/styled/global'

import vars from '../vars'

const ServiceGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);

    > div:first-child {
      order: ${props => (props.position === 'left' ? 1 : 2)};
    }

    > div:last-child {
      order: ${props => (props.position === 'left' ? 2 : 1)};
    }
  }
`

const ServiceCardWrapper = styled.div`
  position: relative;
`

const StyledServiceCardBG = styled.div`
  display: none;
  position: absolute;
  ${props => (props.position === 'left' ? 'right: 5.5rem' : 'left: 5.5rem')};
  top: 0;
  z-index: -1;
  height: 46.5rem;
  flex-direction: ${props =>
    props.position === 'left' ? 'row-reverse' : 'row'};

  > div {
    background-color: ${vars.colorAlmostBlack};
    border-radius: ${vars.borderRadiusLarge};
    width: 35.75rem;
    box-shadow: ${props => (props.position === 'left' ? '-10px' : '10px')} 0
      15px #0a0a0aa6;
  }

  div + div {
    ${props =>
      props.position === 'left'
        ? 'margin-right: -30rem;'
        : 'margin-left: -30rem;'};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
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

const SideTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SideText = styled.div`
  width: 100%;

  h2,
  h3,
  h4,
  h5 {
    font-size: ${vars.fontSizeHeading3};
  }

  ul {
    padding: 0;
    li {
      background-image: none;
      padding: 0.5em 0.75em;
      margin: 0.5em 0;
      border: solid 1px;
      border-color: ${vars.colorGreen};
      border-radius: 180px;
      text-align: center;
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    width: 90%;
    background-color: ${({ position }) =>
      position === 'left' ? vars.colorBlack : 'transparent'};
    border: solid 1px;
    border-color: ${({ position }) =>
      position === 'left' ? vars.colorGreen : 'transparent'};
    border-radius: ${vars.borderRadiusLarge};
    padding: ${({ position, padding }) =>
      position === 'left' ? '4em 2em' : padding};

    h2,
    h3,
    h4,
    h5 {
      text-align: center;
    }

    ul {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 1em;
      li {
        background-image: none;
        padding: 0.5em 0.75em;
        margin: 0.25em;
        border-color: ${props =>
          props.position === 'left' ? vars.colorGreen : vars.colorWhite};
        border-radius: ${vars.borderRadiusLarge};
        font-size: ${vars.fontSizeTextSmall};
        font-weight: ${vars.fontWeightBold};
        text-align: center;
      }
    }
  }
`

const SideTextBg = styled.div`
  display: none;
  position: absolute;

  &.circle {
    height: 570px;
    width: 570px;
    background-color: ${vars.colorGreen};
    z-index: -1;
    border-radius: 999px;
  }

  &.square {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    border: solid 1px ${vars.colorGreen};
    border-radius: ${vars.borderRadiusLarge};
    left: 50%;
    top: 50%;
    transform: translate(-55%, -55%);
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: block;
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
  extraPadding,
}) => {
  const sideImageData = {
    desktop: sideImage?.localFile?.childImageSharp?.desktop,
    tablet: sideImage?.localFile?.childImageSharp?.tablet,
    mobile: sideImage?.localFile?.childImageSharp?.mobile,
    altText: sideImage?.altText,
  }

  console.log(sideImage)
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

const SideContent = ({
  sideContentType,
  sideText,
  sideImage: { desktop, mobile, tablet, altText },
  cardPosition,
  extraPadding,
}) => {
  const [ref, { width, height }] = useDimensions()

  return sideContentType === 'image' ? (
    <SideImage>
      <Image
        backgroundColor="transparent"
        fixed={[
          mobile,
          { ...desktop, media: `(min-width: ${vars.breakpointLarge})` },
        ]}
        alt={altText}
      />
    </SideImage>
  ) : (
    <SideTextWrapper position={cardPosition}>
      <SideText ref={ref} position={cardPosition} padding={extraPadding}>
        {parse(sideText)}
      </SideText>
      <SideTextBg
        $width={width}
        $height={height}
        className={cardPosition === 'left' ? 'square' : 'circle'}
        aria-hidden
      />
    </SideTextWrapper>
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
          tablet: fixed(width: 450) {
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
