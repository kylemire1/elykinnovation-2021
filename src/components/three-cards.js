import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, Section } from './styled/global'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin-top: ${props => (props.$offset ? '-8em' : 0)};

  ul {
    margin: 0;
  }

  > div {
    background-color: ${props => props.bg};
    color: ${vars.colorWhite};
    padding: 2em;
    border-radius: ${vars.borderRadiusSmall};
    box-shadow: 0 3px 40px #150000;

    > h2 {
      margin-top: 0;
      font-weight: ${vars.fontWeightLight};
      font-size: ${vars.fontSizeHeading2};

      span {
        font-weight: ${vars.fontWeightBold};
      }
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);

    > div {
      > h2 {
        text-align: center;
        font-size: ${vars.fontSizeHeading3};
      }
    }
  }
`

const ThreeCards = ({
  card1Body,
  card1Title,
  card2Body,
  card2Title,
  card3Body,
  card3Title,
  cardBackgroundColor,
  offsetTop,
  sectionBackgroundColor,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <CardGrid bg={cardBackgroundColor} $offset={offsetTop}>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: card1Title }} />
            <div dangerouslySetInnerHTML={{ __html: card1Body }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: card2Title }} />
            <div dangerouslySetInnerHTML={{ __html: card2Body }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: card3Title }} />
            <div dangerouslySetInnerHTML={{ __html: card3Body }} />
          </div>
        </CardGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment ThreeCardRow on WpPage_Layoutsections_Components_ThreeCardRow {
    fieldGroupName
    cardBackgroundColor
    card1Body
    card1Title
    card2Body
    card2Title
    card3Body
    card3Title
    offsetTop
    sectionBackgroundColor
  }
`

export default ThreeCards
