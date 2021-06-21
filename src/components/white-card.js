import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Section, Container, SoloHeading } from './styled/global'

import vars from '../vars'

const WhiteCards = ({ cards }) => {
  return (
    <Section bg="colorAlmostBlack">
      <Container>
        <CardGrid>
          {cards.length &&
            cards.map(({ title, description, image, name }, cardIndex) => (
              <Inner key={`Executive_Cards_${cardIndex}`}>
                <Portrait>
                  <GatsbyImage
                    image={getImage(image.localFile)}
                    alt={image.altText}
                  />
                </Portrait>
                <ContentWrapper>
                  <Title>{title}</Title>
                  <SoloHeading color={vars.colorAlmostBlack}>
                    {name}
                  </SoloHeading>
                  <Description>{description && parse(description)}</Description>
                </ContentWrapper>
              </Inner>
            ))}
        </CardGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment AboutWhiteCard on WpPage_Layoutsections_Components_AboutWhiteCard {
    fieldGroupName
    cards {
      description
      name
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

const Inner = styled.div`
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  margin: 0 auto;

  @media (min-width: ${vars.breakpointMedium}) {
    max-width: 100%;
  }
`

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Portrait = styled.div`
  max-width: 100%;
  max-height: 100%;
  .gatsby-image-wrapper {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
  }
`

const Title = styled.div`
  display: flex;
  color: ${vars.colorGreen};
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
  font-size: ${vars.fontSizeText};
  text-transform: uppercase;
  font-weight: 600;
`

const Description = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
  font-weight: ${vars.fontWe};
`

const ContentWrapper = styled.div`
  padding: 1.5em;
`

export default WhiteCards
