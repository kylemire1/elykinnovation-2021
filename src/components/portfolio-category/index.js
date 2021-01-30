import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import slugify from 'slugify'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Section, Container, SoloHeading } from '../styled/global'

import vars from '../../vars'
import PortfolioCategoryItem from './portfolio-category-item'

const ProjectGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 1em;
    border: solid ${vars.pixel} ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusSmall};
    transition: border-radius 250ms ${vars.ease};
    color: ${vars.colorGreenSmallSubpage};
    text-decoration: none;

    :hover,
    :focus {
      border-radius: ${vars.borderRadiusLarge};
      transition: border-radius 250ms ${vars.ease};
    }
  }
`

const PortfolioCategory = ({ categoryName, projects }) => {
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    if (!slug && categoryName) {
      setSlug(slugify(categoryName.toLowerCase().replaceAll('websites', '')))
    }
  }, [categoryName, slug])

  return (
    <Section bg="colorWhite">
      <Container>
        <SoloHeading id={slug} color={vars.colorAlmostBlack}>
          {categoryName}
        </SoloHeading>
        <ProjectGrid>
          {projects &&
            projects.map((project, projectIndex) => (
              <PortfolioCategoryItem
                key={`ProjectCategoryItem_${projectIndex}`}
                {...project}
              />
            ))}
        </ProjectGrid>
        <LinkWrapper>
          <AnchorLink href="#portfolio-top" offset="100">
            Return to Top
          </AnchorLink>
        </LinkWrapper>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment PortfolioCategory on WpPage_Layoutsections_Components_PortfolioCategory {
    categoryName
    fieldGroupName
    projects {
      fieldGroupName
      projectDescription
      projectLink
      projectName
      projectImage {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default PortfolioCategory
