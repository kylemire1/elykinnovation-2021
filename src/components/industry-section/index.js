import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import IndustryCard from './industry-card'
import { Section, Container, SectionHeading } from '../styled/global'

import vars from '../../vars'

const IndustryGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const IndustrySection = ({
  angledBackgroundTransition,
  mainHeadingText,
  sectionBackgroundColor,
  smallGreenHeadingText,
  industries,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        <SectionHeading>
          <span>{smallGreenHeadingText} </span>
          {mainHeadingText}
        </SectionHeading>
        <IndustryGrid>
          {industries.length > 0 &&
            industries.map((industry, industryIndex) => (
              <IndustryCard
                key={`IndustryCard_${industry}_${industryIndex}`}
                {...industry}
              />
            ))}
        </IndustryGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment IndustriesSection on WpPage_Layoutsections_Components_IndustrySection {
    angledBackgroundTransition
    fieldGroupName
    mainHeadingText
    sectionBackgroundColor
    smallGreenHeadingText
    industries {
      featuredClientLink
      featuredClientName
      featuredClientImage {
        altText
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      industryName
    }
  }
`

export default IndustrySection
