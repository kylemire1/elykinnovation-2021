import React from 'react'
import styled from 'styled-components'

import vars from '../vars'

const CardGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin-top: ${props => (props.offset ? '-4.5em' : 0)};

  div {
    background-color: ${props => props.bg};
    color: ${vars.colorWhite};
    padding: 2em;
    border-radius: ${vars.borderRadiusSmall};
    box-shadow: 0 3px 40px #150000;
  }

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ThreeCards = ({ bgColor, topOffset }) => {
  return (
    <CardGrid bg={bgColor} offset={topOffset}>
      <div>hello</div>
      <div>hello 2</div>
      <div> hello 3</div>
    </CardGrid>
  )
}

export default ThreeCards
