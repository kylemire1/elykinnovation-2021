import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'

import { Container, Section } from './styled/global'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin-top: ${props => (props.$offset ? '-7em' : 0)};

  ul {
    margin: 0;
  }

  > div {
    background-color: ${props => vars[props.bg]};
    color: ${vars.colorWhite};
    padding: 2em;
    border-radius: ${vars.borderRadiusSmall};

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
    margin-top: ${props => (props.$offset ? '-8em' : 0)};
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
            <div>{parse(card1Body)}</div>
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: card2Title }} />
            <div>{parse(card2Body)}</div>
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: card3Title }} />
            <div>{parse(card3Body)}</div>
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
