import React from 'react'

const NavItem = ({ children, itemProps }) => {
  return <li {...itemProps}>{children}</li>
}

export default NavItem
