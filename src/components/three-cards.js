import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, Section, SoloHeading } from './styled/global'
import Card from './card'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: ${({ $offset }) => ($offset ? '-7em' : 0)};
  position: relative;
  z-index: 1;

  ul {
    margin: 0;
  }

  > div {
    background-color: ${({ bg }) => vars[bg]};
    color: ${vars.colorWhite};
    padding: 2em;
    border-radius: ${vars.borderRadiusSmall};
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${({ $offset }) => ($offset ? '-8em' : 0)};
  }
`

const ThreeCards = ({
  cards,
  cardBackgroundColor,
  offsetTop,
  sectionBackgroundColor,
  largeHeadings,
  sectionHeading,
  angledBackgroundTransition,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        {sectionHeading && <SoloHeading>{sectionHeading}</SoloHeading>}
        {cards && (
          <CardGrid bg={cardBackgroundColor} $offset={offsetTop}>
            {cards.map(({ cardTitle, cardBody, cardLink }, cardIndex) => (
              <Card
                key={`${cardTitle}_card_${cardIndex}`}
                largeHeading={largeHeadings}
                title={cardTitle}
                body={cardBody}
                link={cardLink}
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
    largeHeadings
    sectionHeading
    angledBackgroundTransition
  }
`

export default ThreeCards
