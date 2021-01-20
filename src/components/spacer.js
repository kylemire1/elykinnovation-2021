import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import vars from '../vars'

const StyledSpacer = styled.div`
  background-color: ${props => vars[props.bg]};
  height: ${props => props.height};
`

const Spacer = ({ backgroundColor, spacing }) => {
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
