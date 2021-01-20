import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Container, Section, SectionHeading } from './styled/global'
import Card from './card'
import Button from './button'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin-bottom: ${props => (props.$button ? '2rem' : 0)};

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`

const SixCards = ({
  angledBackgroundTransition,
  buttonLink,
  buttonText,
  card1Title,
  card1Link,
  card1Body,
  card2Body,
  card2Link,
  card2Title,
  card3Body,
  card3Link,
  card3Title,
  card4Body,
  card4Link,
  card4Title,
  card5Body,
  card5Title,
  card5Link,
  card6Body,
  card6Title,
  card6Link,
  cardBackgroundColor,
  mainHeadingText,
  sectionBackgroundColor,
  smallGreenHeadingText,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        <SectionHeading>
          <span>{smallGreenHeadingText}</span>
          {mainHeadingText}
        </SectionHeading>
        <CardGrid $button={buttonLink && buttonText}>
          <Card
            title={card1Title}
            body={card1Body}
            link={card1Link}
            backgroundColor={cardBackgroundColor}
          />
          <Card
            title={card2Title}
            body={card2Body}
            link={card2Link}
            backgroundColor={cardBackgroundColor}
          />
          <Card
            title={card3Title}
            body={card3Body}
            link={card3Link}
            backgroundColor={cardBackgroundColor}
          />
          <Card
            title={card4Title}
            body={card4Body}
            link={card4Link}
            backgroundColor={cardBackgroundColor}
          />
          <Card
            title={card5Title}
            body={card5Body}
            link={card5Link}
            backgroundColor={cardBackgroundColor}
          />
          <Card
            title={card6Title}
            body={card6Body}
            link={card6Link}
            backgroundColor={cardBackgroundColor}
          />
        </CardGrid>
        {buttonLink && buttonText && (
          <Button buttonStyle="red" elementType="link" href={buttonLink}>
            {buttonText}
          </Button>
        )}
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment SixCardGrid on WpPage_Layoutsections_Components_SixCardGrid {
    angledBackgroundTransition
    buttonLink
    buttonText
    card1Title
    card1Link
    card1Body
    card2Body
    card2Link
    card2Title
    card3Body
    card3Link
    card3Title
    card4Body
    card4Link
    card4Title
    card5Body
    card5Title
    card5Link
    card6Body
    card6Title
    card6Link
    cardBackgroundColor
    fieldGroupName
    mainHeadingText
    sectionBackgroundColor
    smallGreenHeadingText
  }
`

export default SixCards
