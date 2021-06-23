import React from 'react'
import Image from 'gatsby-image'
import parse from 'html-react-parser'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, SoloHeading } from './styled/global'

import vars from '../vars'

const StyledH2ParagraphLeftImageRight = styled.section`
  position: relative;
  display: flex;
  color: ${vars.colorWhite};

  p {
    color: ${vars.colorBlack};
    line-height: 1.75;
  }

  img {
    border-radius: ${vars.borderRadiusLarge};
  }
`

const StyledContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledHeading = styled(SoloHeading)`
  font-size: ${vars.fontSizeHeading2};
`

const H2ParagraphLeftImageRight = ({ h2Text, paragraphText, rightImage }) => {
  const imageData = {
    desktop: rightImage?.localFile?.childImageSharp?.desktop,
    mobile: rightImage?.localFile?.childImageSharp?.mobile,
    altText: rightImage?.altText,
  }
  return (
    <StyledH2ParagraphLeftImageRight>
      <StyledContainer>
        <div>
          <StyledHeading as="h2" color={vars.colorRed}>
            {h2Text}
          </StyledHeading>
          {parse(paragraphText)}
        </div>
        <div>
          {rightImage && (
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
        </div>
      </StyledContainer>
    </StyledH2ParagraphLeftImageRight>
  )
}

export const fragment = graphql`
  fragment H2ParagraphLeftImageRight on WpPage_Layoutsections_Components_H2ParagraphLeftImageRight {
    fieldGroupName
    h2Text
    paragraphText
    rightImage {
      localFile {
        childImageSharp {
          desktop: fixed(width: 572, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
          mobile: fixed(width: 350, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  }
`

export default H2ParagraphLeftImageRight
