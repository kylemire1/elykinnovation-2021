import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import vars from '../../vars'

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  transition: color 250ms ${vars.ease};

  &:hover,
  &:focus {
    color: ${vars.colorGreenSmall};
    transition: color 250ms ${vars.ease};
  }
`

const NavItem = ({ children, itemProps, href }) => {
  return (
    <li {...itemProps}>
      <StyledLink to={href}>{children}</StyledLink>
    </li>
  )
}

export default NavItem
