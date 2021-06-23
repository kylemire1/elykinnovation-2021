import React from 'react'
import slugify from 'slugify'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import vars from '../../vars'

const StyledMenuItem = styled.li`
  background-image: none !important;
  margin-top: 1.5rem;
  margin: 0.25rem;
  padding: 0.25em 0.5em;
  border: solid ${vars.pixel} ${vars.colorGreenSmall};
  border-radius: ${vars.borderRadiusSmall};
  transition: border-radius 250ms ${vars.ease};

  :hover,
  :focus,
  :focus-within {
    border-radius: ${vars.borderRadiusLarge};
    transition: border-radius 250ms ${vars.ease};
  }

  a {
    color: ${vars.colorGreenSmallSubpage};
    text-decoration: none;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 0.5em;
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
