import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from './styled/global'

import vars from '../vars'

const StyledH2ParagraphLeftImageRight = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;  
  color: ${vars.colorWhite};
`

const H2ParagraphLeftImageRight = ({ h2Text, paragraphText, rightImage }) => {
  return (
    <StyledH2ParagraphLeftImageRight>
      <Container>
        <h2>{h2Text}</h2>
        <div>{paragraphText}</div>
      </Container>      
    </StyledH2ParagraphLeftImageRight>
  )
}

export const fragment = graphql`
  fragment H2ParagraphLeftImageRight on WpPage_Layoutsections_Components_H2ParagraphLeftImageRight {
    fieldGroupName
    h2Text
    paragraphText
    rightImage {
      sourceUrl
    }
  }
`

export default H2ParagraphLeftImageRight
