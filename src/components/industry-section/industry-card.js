import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'

import { SectionHeading } from '../styled/global'

import vars from '../../vars'

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  max-height: 16.25rem;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: ${vars.borderRadiusSmall};
`

const FeaturedClientHeading = styled(SectionHeading)`
  font-size: ${vars.fontSizeHeading1};
`

const CardText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 250ms ${vars.ease};

  p {
    font-size: ${vars.fontSizeHeading1};
    text-align: center;
    color: ${vars.colorWhite};
    margin-bottom: 0;
    text-shadow: 2px 2px 7px rgba(0, 0, 0, 1);
  }
`

const StyledCard = styled.div`
  border-radius: ${vars.borderRadiusSmall};
  position: relative;

  a {
    :focus,
    :hover {
      ${CardText} {
        opacity: 0;
        transition: opacity 250ms ${vars.ease};
      }
    }
  }
`

const IndustryCard = ({
  featuredClientImage,
  featuredClientName,
  featuredClientLink,
  industryName,
  altText,
}) => {
  const cardImage = featuredClientImage?.localFile?.childImageSharp?.fluid
  return (
    <StyledCard>
      <Link to={featuredClientLink}>
        <ImageWrapper>
          <CardText>
            <p>{industryName}</p>
          </CardText>
          <Image
            backgroundColor={vars.colorDarkRed}
            fluid={cardImage}
            alt={altText}
          />
        </ImageWrapper>
      </Link>
      <FeaturedClientHeading>
        <span>Featured Client</span> {featuredClientName}
      </FeaturedClientHeading>
    </StyledCard>
  )
}

export default IndustryCard
