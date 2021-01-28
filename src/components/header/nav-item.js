import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import vars from '../../vars'

const StyledNavItem = styled.li`
  background-color: transparent;
  &.current {
    background-color: ${vars.colorGreen};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    &.current {
      background-color: transparent;
      a {
        color: ${vars.colorGreenSmall};
      }
    }
  }
`

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

const NavItem = ({ children, itemProps, href, currentItem }) => {
  return (
    <StyledNavItem className={currentItem ? 'current' : null}>
      <StyledLink {...itemProps} to={href}>
        {children}
      </StyledLink>
    </StyledNavItem>
  )
}

export default NavItem
