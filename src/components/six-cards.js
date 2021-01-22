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
  cards,
  cardBackgroundColor,
  mainHeadingText,
  sectionBackgroundColor,
  smallGreenHeadingText,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        <SectionHeading bg={sectionBackgroundColor}>
          <span>{smallGreenHeadingText}</span>
          {mainHeadingText}
        </SectionHeading>
        <CardGrid $button={buttonLink && buttonText}>
          {cards.map((card, cardIndex) => (
            <Card
              key={`${card.cardTitle}_card_${cardIndex}`}
              title={card.cardTitle}
              body={card.cardBody}
              link={card.cardLink}
              backgroundColor={cardBackgroundColor}
            />
          ))}
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
    cardBackgroundColor
    mainHeadingText
    sectionBackgroundColor
    smallGreenHeadingText
    fieldGroupName
    cards {
      cardBody
      cardLink
      cardTitle
    }
  }
`

export default SixCards
