import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import FaqItem from './faq-item'
import { Section, Container, SoloHeading } from '../styled/global'

import vars from '../../vars'

const FaqHeading = styled(SoloHeading)`
  text-align: center;
`

const FaqGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FaqSection = ({ sectionHeading, faqs }) => {
  return (
    <Section>
      <Container>
        <FaqHeading color={vars.colorAlmostBlack}>{sectionHeading}</FaqHeading>
        <FaqGrid>
          {faqs.length > 0 &&
            faqs.map((faq, faqIndex) => (
              <FaqItem key={`faq_${faqIndex}`} {...faq} />
            ))}
        </FaqGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment FaqSection on WpPage_Layoutsections_Components_FaqSection {
    fieldGroupName
    sectionHeading
    faqs {
      answer
      question
      fieldGroupName
    }
  }
`

export default FaqSection
