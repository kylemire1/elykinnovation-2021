import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import { HeroHeading, Container } from './styled/global'

import vars from '../vars'
import heroBgSrc from '../../content/assets/portfolio-bg-pattern.svg'

const StyledHero = styled.section`
  min-height: 42.5rem;
  background-color: ${vars.colorAlmostBlack};

  @media (min-width: ${vars.breakpointLarge}) {
    background-image: url(${heroBgSrc});
    background-repeat: no-repeat;
    background-position: top -${vars.pixel} center;
  }
`

const HeroContent = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
  }
`

const ImageWrapper = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    justify-self: end;
  }
`

const SubpageHeroLarge = ({
  mainHeadingText,
  image,
  paragraphText,
  smallGreenHeadingText,
}) => {
  const imageData = {
    desktop: image?.localFile?.childImageSharp?.desktop,
    mobile: image?.localFile?.childImageSharp?.mobile,
    altText: image?.altText,
  }

  return (
    <StyledHero>
      <Container>
        <HeroContent>
          <div>
            {mainHeadingText && (
              <HeroHeading>
                {smallGreenHeadingText && <span>{smallGreenHeadingText} </span>}
                {mainHeadingText}
              </HeroHeading>
            )}
            {paragraphText && parse(paragraphText)}
          </div>
          <ImageWrapper>
            {image && (
              <Image
                backgroundColor="transparent"
                fixed={[
                  imageData.mobile,
                  {
                    ...imageData.desktop,
                    media: `(min-width: ${vars.breakpointLarge})`,
                  },
                ]}
                alt={imageData.altText}
              />
            )}
          </ImageWrapper>
        </HeroContent>
      </Container>
    </StyledHero>
  )
}

export const fragment = graphql`
  fragment SubpageHeroLarge on WpPage_Layoutsections_Components_SubpageHeroLarge {
    fieldGroupName
    mainHeadingText
    image {
      altText
      localFile {
        childImageSharp {
          desktop: fixed(width: 572) {
            ...GatsbyImageSharpFixed_noBase64
          }
          mobile: fixed(width: 350) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    paragraphText
    smallGreenHeadingText
  }
`

export default SubpageHeroLarge
