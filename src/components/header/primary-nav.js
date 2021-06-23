import React from 'react'
import styled from 'styled-components'

import NavItem from './nav-item'

import vars from '../../vars'

export const StyledPrimaryNav = styled.div`
  order: 1;
  border-radius: ${vars.borderRadiusLarge};
  margin: 0 1em;
  display: none;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    margin: 0;
  }

  li {
    width: 100%;
    text-align: center;
    margin: 0.25em 0;
    padding: 0.75em;
    background-color: ${vars.colorAlmostBlack};
    border: solid ${vars.pixel} ${vars.colorGreen};
    border-radius: ${vars.borderRadiusLarge};
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: block;
    order: 2;
    margin: 0;
    ul {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      li {
        width: auto;
        text-align: auto;
        padding: 0.25em;
        background-color: transparent;
        border: none;
        border-radius: 0;
      }

      li + li {
        margin-left: 1em;
      }
    }
  }
`

const PrimaryNav = ({ itemProps, menuItems, currentPageSlug }) => {
  return (
    <StyledPrimaryNav>
      <ul>
        {menuItems.length > 0 &&
          menuItems.map(({ url, label }, itemIndex) => (
            <NavItem
              key={`primary_nav_item_${itemIndex}`}
              href={url}
              itemProps={itemProps[itemIndex]}
              currentPageSlug={currentPageSlug}
            >
              {label}
            </NavItem>
          ))}
      </ul>
    </StyledPrimaryNav>
  )
}

export default PrimaryNav
