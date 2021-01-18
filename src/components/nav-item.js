import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`

const NavItem = ({ children, itemProps, href }) => {
  return (
    <li {...itemProps}>
      <StyledLink to={href}>{children}</StyledLink>
    </li>
  )
}

export default NavItem
