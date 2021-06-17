import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'

import {
  Container,
  Card,
  TitleHead,
  SoloHeading,
  CardGrid,
} from './styled/global'

const Image = styled.div`
  .gatsby-image-wrapper {
    border-right: 2em solid transparent;
  }
`
const Text = styled.div`
  float: right;
`

const AboutBlackCard = ({ description, name, title, picture }) => {
  return (
    <Card>
      <Container>
        <CardGrid>
          <Image>
            <GatsbyImage
              image={getImage(picture.localFile)}
              alt={picture.altText}
            />
          </Image>
          <Text>
            <TitleHead>{title}</TitleHead>
            {name && <SoloHeading>{name}</SoloHeading>}
            {parse(description)}
          </Text>
        </CardGrid>
      </Container>
    </Card>
  )
}

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
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            quality: 100
            layout: FIXED
            height: 450
            width: 450
          )
        }
      }
    }
  }
`

export default AboutBlackCard
