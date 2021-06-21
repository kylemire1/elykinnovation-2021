import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Section, Container } from './styled/global'
import parse from 'html-react-parser'

import vars from '../vars'

const Text = styled.div`
  a:link {
    color: ${vars.colorGreenSmall};
  }
`

const TextContentNoImages = ({ text, sectionBackgroundColor }) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <Text>{parse(text)}</Text>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment TextContentNoImages on WpPage_Layoutsections_Components_TextContentNoImages {
    fieldGroupName
    text
    sectionBackgroundColor
  }
`

export default TextContentNoImages
