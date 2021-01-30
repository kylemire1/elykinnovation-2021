import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { rgba } from 'polished'

import { SoloHeading } from '../styled/global'

import vars from '../../vars'

const CategoryItem = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    max-width: 23.25rem;
  }
`

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
  max-height: 23.75rem;
  overflow: hidden;
  border-radius: ${vars.borderRadiusSmall};
  border: solid ${vars.pixel};
  border-color: ${vars.colorTransparent};
  box-shadow: 0 1.25rem 2.5rem ${rgba('#021717', 0)};
  transition: all 250ms ${vars.ease};

  :hover,
  :focus {
    border-radius: ${vars.borderRadiusLarge};
    box-shadow: 0 1.25rem 2.5rem ${rgba('#021717', 0.25)};
    transition: all 250ms ${vars.ease};
  }
`

const ProjectHeading = styled(SoloHeading)`
  font-size: ${vars.fontSizeTextLarge};
`

const PortfolioCategoryItem = ({
  projectDescription,
  projectLink,
  projectName,
  projectImage,
  projectImage: { altText },
}) => {
  const image = projectImage?.localFile?.childImageSharp?.fluid
  return (
    <CategoryItem>
      <ImageWrapper>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <Image
            backgroundColor={vars.colorDarkRed}
            fluid={image}
            alt={altText}
          />
        </a>
      </ImageWrapper>
      <ProjectHeading color={vars.colorGreen}>{projectName}</ProjectHeading>
      <div>{projectDescription && parse(projectDescription)}</div>
    </CategoryItem>
  )
}

export default PortfolioCategoryItem
