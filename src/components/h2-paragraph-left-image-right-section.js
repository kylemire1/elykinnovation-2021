import React from 'react'
import Image from 'gatsby-image'
import parse from 'html-react-parser';
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container } from './styled/global'

import vars from '../vars'

const StyledH2ParagraphLeftImageRight = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;  
  color: ${vars.colorWhite};
  .h2lpir-left { 
    width: 48%;
    float: left;
  }
  .h2lpir-left h2 {
    color: #610103;
    line-height: 1.4;
    font-size: 1.5em;
    margin: 0 0 1rem;
  }
  .h2lpir-left .para {
    color: #000000;
    font-family: "Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.25em;
    line-height: 1.75;
  }
  .h2lpir-right {
    width: 48%;
    float: right;
    border-radius: 1.875em;
  }
  .h2lpir-right img {
    border-radius: 1.875em;
  }
`

const H2ParagraphLeftImageRight = ({ h2Text, paragraphText, rightImage }) => {
  return (
    <StyledH2ParagraphLeftImageRight>
      <Container>
        <div class="h2lpir-left">
          <h2>{h2Text}</h2>
          <div class="para">{parse(paragraphText)}</div>
        </div>        
        <div class="h2lpir-right">
          <img
            alt="Mobile devices with applications running on their screens"
            src={rightImage.sourceUrl}
          />
        </div>
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
