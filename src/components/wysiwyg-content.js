import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'

import { Container, Section } from './styled/global'

import vars from '../vars'

const ContentWrapper = styled.div`
  h2,
  h3,
  h4,
  h5 {
    font-size: ${vars.fontSizeHeading2};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    h2,
    h3,
    h4,
    h5 {
      font-size: ${vars.fontSizeHeading2};
    }
  }
`

const WysiwygContent = ({
  angledBackgroundTransition,
  sectionBackgroundColor,
  wysiwygContent,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        {wysiwygContent && (
          <ContentWrapper>{parse(wysiwygContent)}</ContentWrapper>
        )}
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment WysiwygContent on WpPage_Layoutsections_Components_WysiwygContentPanel {
    angledBackgroundTransition
    fieldGroupName
    sectionBackgroundColor
    wysiwygContent
  }
`

export default WysiwygContent
