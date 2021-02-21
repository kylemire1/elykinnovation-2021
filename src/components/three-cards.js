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

  &.animate > div {
    transform: translateY(50%);
    opacity: 0;
    animation-duration: 900ms;
    animation-timing-function: ${vars.ease};
    animation-name: slidein;
    animation-fill-mode: forwards;

    &:nth-child(2) {
      animation-delay: 150ms;
    }
    &:nth-child(3) {
      animation-delay: 300ms;
    }
  }

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

  @keyframes slidein {
    from {
      transform: translateY(50%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
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
  entranceAnimation,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        {sectionHeading && <SoloHeading>{sectionHeading}</SoloHeading>}
        {cards && (
          <CardGrid
            className={entranceAnimation ? 'animate' : ''}
            bg={cardBackgroundColor}
            $offset={offsetTop}
          >
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
    entranceAnimation
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
