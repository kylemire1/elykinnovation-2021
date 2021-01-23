import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, Section } from './styled/global'
import Card from './card'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: ${props => (props.$offset ? '-7em' : 0)};

  ul {
    margin: 0;
  }

  > div {
    background-color: ${props => vars[props.bg]};
    color: ${vars.colorWhite};
    padding: 2em;
    border-radius: ${vars.borderRadiusSmall};
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${props => (props.$offset ? '-8em' : 0)};
  }
`

const ThreeCards = ({
  cards,
  cardBackgroundColor,
  offsetTop,
  sectionBackgroundColor,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        {cards && (
          <CardGrid bg={cardBackgroundColor} $offset={offsetTop}>
            {cards.map((card, cardIndex) => (
              <Card
                key={`${card.cardTitle}_card_${cardIndex}`}
                largeHeading={true}
                title={card.cardTitle}
                body={card.cardBody}
                link={card.cardLink}
                backgroundColor={cardBackgroundColor}
              />
            ))}
          </CardGrid>
        )}
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment ThreeCardRow on WpPage_Layoutsections_Components_ThreeCardRow {
    fieldGroupName
    cardBackgroundColor
    cards {
      cardTitle
      cardBody
      cardLink
    }
    offsetTop
    sectionBackgroundColor
  }
`

export default ThreeCards
