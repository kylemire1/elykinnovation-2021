import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'

import { Container, SectionHeading } from './styled/global'

import vars from '../vars'

const AboutBlackCard = ({ description, name, title, picture }) => {
  return (
    <StyledContainer>
      <Inner>
        <Image>
          <GatsbyImage
            image={getImage(picture.localFile)}
            alt={picture.altText}
          />
        </Image>
        <TextWrapper>
          <Text>
            {name && (
              <SectionHeading>
                <span>{title}</span>
                {name}
              </SectionHeading>
            )}
            {parse(description)}
          </Text>
        </TextWrapper>
      </Inner>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  & + & {
    margin-top: 1.5rem;
  }
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  overflow: hidden;
  max-width: 40rem;
  margin: 0 auto;

  @media (min-width: ${vars.breakpointMedium}) {
    max-width: 100%;
    grid-template-columns: 1fr 1.5fr;
  }
`

const Image = styled.div`
  position: relative;
  min-height: 23rem;
  .gatsby-image-wrapper {
    position: absolute;
    inset: 0;
    min-height: 23rem;
    height: 100%;
    width: 100%;
  }
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`

const Text = styled.div`
  color: white;

  p:last-child {
    margin-bottom: 0;
  }
`

export const TitleHead = styled.div`
  font-size: ${vars.fontSizeText};
  text-transform: uppercase;
  color: ${vars.colorGreenSmall};
  font-weight: ${vars.fontWeightBold};
  margin-top: 2rem;
  margin-bottom: -0.5rem;
  padding: ${({ angled }) => (angled ? '7.5rem 0 3rem' : '1rem 0')};
`

export const fragment = graphql`
  fragment AboutBlackCard on WpPage_Layoutsections_Components_AboutBlackCard {
    fieldGroupName
    description
    name
    title
    picture {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 100)
        }
      }
    }
  }
`

export default AboutBlackCard
