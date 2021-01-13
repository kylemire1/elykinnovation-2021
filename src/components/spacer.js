import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const StyledSpacer = styled.div`
  background-color: ${props => props.bg};
  height: ${props => props.height};
`

const Spacer = ({ backgroundColor, spacing }) => {
  console.log('spacer?')
  return <StyledSpacer bg={backgroundColor} height={spacing} aria-hidden />
}

export const fragment = graphql`
  fragment Spacer on WpPage_Layoutsections_Components_Spacer {
    backgroundColor
    spacing
    fieldGroupName
  }
`

export default Spacer
