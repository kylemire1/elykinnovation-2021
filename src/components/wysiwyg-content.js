import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'

import { Container, Section } from './styled/global'

import vars from '../vars'
import bullet from '../../content/assets/bullet.png'

const ContentWrapper = styled.div`
  max-width: ${({ $narrow }) => ($narrow ? '80ch' : '100%')};
  margin: 0 auto;

  ul {
    li {
      background-image: url(${bullet}) !important;
    }
  }

  h2 {
    font-size: ${vars.fontSizeHeading2};
  }

  h3,
  h4,
  h5 {
    font-size: ${vars.fontSizeHeading1};
  }

  a {
    color: ${vars.colorGreenSmall};
    transition: color 250ms ${vars.ease};

    :hover {
      color: ${vars.colorWhite};
      transition: color 250ms ${vars.ease};
    }
  }
`

const WysiwygContent = ({
  angledBackgroundTransition,
  sectionBackgroundColor,
  wysiwygContent,
  narrowLayout,
}) => {
  return (
    <Section bg={sectionBackgroundColor} angled={angledBackgroundTransition}>
      <Container>
        {wysiwygContent && (
          <ContentWrapper $narrow={narrowLayout}>
            {parse(wysiwygContent)}
          </ContentWrapper>
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
    narrowLayout
    wysiwygContent
  }
`

export default WysiwygContent
