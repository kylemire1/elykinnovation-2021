import React from 'react'
import slugify from 'slugify'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import vars from '../../vars'

const StyledMenuItem = styled.li`
  background-image: none !important;
  margin-top: 0;
  margin: 0.25rem;
  padding: 0.25rem;

  a {
    padding: 1em;
    border: solid ${vars.pixel} ${vars.colorGreenSmall};
    border-radius: ${vars.borderRadiusSmall};
    transition: border-radius 250ms ${vars.ease};
    color: ${vars.colorGreenSmallSubpage};
    text-decoration: none;

    :hover,
    :focus {
      border-radius: ${vars.borderRadiusLarge};
      transition: border-radius 250ms ${vars.ease};
    }
  }
`

const PortfolioMenuItem = ({ name }) => {
  return (
    <StyledMenuItem>
      <AnchorLink href={`#${slugify(name.toLowerCase())}`} offset="100">
        {name}
      </AnchorLink>
    </StyledMenuItem>
  )
}

export default PortfolioMenuItem
