import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import vars from '../../vars'
import useMenuData from '../../utils/hooks/useMenuData'

const MobileMenuLink = styled(Link)`
  display: block;
  margin: 0.75em 0.25em;
  padding: 0.75em;
  text-align: center;
  color: ${vars.colorWhite};
  text-decoration: none;
  border-radius: ${vars.borderRadiusLarge};
  background-color: ${vars.colorAlmostBlack};
  transition: all 250ms ${vars.ease};

  &.primary {
    border: solid ${vars.pixel} ${vars.colorGreen};
  }

  :hover,
  :focus {
    background-color: ${vars.colorGreen};
    color: ${vars.colorWhite};
    transition: all 250ms ${vars.ease};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: none;
  }
`

const MobileNav = ({ menuItems, currentPageSlug, itemProps }) => {
  const [{ primaryMenuData }] = useMenuData()

  return (
    <>
      {menuItems.length > 0 &&
        menuItems.map((menuItem, itemIndex) => (
          <MobileMenuLink
            key={`secondary_nav_item_${itemIndex}`}
            to={menuItem.url}
            {...itemProps[itemIndex]}
            className={menuItem === primaryMenuData[itemIndex] ? 'primary' : ''}
          >
            {menuItem.label}
          </MobileMenuLink>
        ))}
    </>
  )
}

export default MobileNav
