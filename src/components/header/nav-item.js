import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

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
        color: ${({ $secondary }) =>
          $secondary ? darken(0.35, vars.colorWhite) : vars.colorGreenSmall};
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

  @media (min-width: ${vars.breakpointLarge}) {
    &:hover,
    &:focus {
      color: ${({ $secondary }) =>
        $secondary ? darken(0.1, vars.colorWhite) : vars.colorGreenSmall};
    }
  }
`

const NavItem = ({ secondary, children, itemProps, href, currentPageSlug }) => {
  const [currentItem, setCurrentItem] = useState(false)
  useEffect(() => {
    if (href && href.includes(currentPageSlug)) {
      setCurrentItem(true)
    }
  }, [href, currentPageSlug])

  return (
    <StyledNavItem
      $secondary={secondary}
      className={currentItem ? 'current' : null}
    >
      <StyledLink $secondary={secondary} {...itemProps} to={href}>
        {children}
      </StyledLink>
    </StyledNavItem>
  )
}

export default NavItem
