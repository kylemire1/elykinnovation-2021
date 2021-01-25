import React from 'react'
import styled from 'styled-components'

import NavItem from './nav-item'
import { StyledPrimaryNav } from './primary-nav'

import vars from '../../vars'

const StyledSecondaryNav = styled(StyledPrimaryNav)`
  order: 2;
  margin: 0 1em;
  li {
    width: 100%;
    text-align: center;
    padding: 0.75em;
    background-color: ${vars.colorAlmostBlack};
    border-radius: ${vars.borderRadiusLarge};
    border: solid ${vars.pixel} ${vars.colorAlmostBlack};
    margin: 0.25em 0;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    order: 1;
    max-width: 55%;
    margin-left: auto;
    margin-right: 0;

    ul {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    li {
      font-size: 0.85rem;
    }
  }
`

const SecondaryNav = ({ itemProps, menuItems }) => {
  return (
    <StyledSecondaryNav>
      <ul>
        {menuItems.length > 0 &&
          menuItems.map(({ url, label }, itemIndex) => (
            <NavItem
              key={`secondary_nav_item_${itemIndex}`}
              href={url}
              itemProps={itemProps[itemIndex]}
            >
              {label}
            </NavItem>
          ))}
      </ul>
    </StyledSecondaryNav>
  )
}

export default SecondaryNav
