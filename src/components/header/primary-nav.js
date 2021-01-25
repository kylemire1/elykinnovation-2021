import React from 'react'
import styled from 'styled-components'

import NavItem from './nav-item'

import vars from '../../vars'

export const StyledPrimaryNav = styled.div`
  order: 1;
  border-radius: ${vars.borderRadiusLarge};
  margin: 0 1em;

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

  a {
    color: currentColor;
    transition: color 250ms ${vars.ease};
  }

  a:hover,
  :focus,
  :focus-within {
    color: ${vars.colorGreenSmall};
    transition: color 250ms ${vars.ease};
  }

  @media (min-width: ${vars.breakpointLarge}) {
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
        margin-left: 1.5em;
      }
    }
  }
`

const PrimaryNav = ({ itemProps, menuItems }) => {
  return (
    <StyledPrimaryNav>
      <ul>
        {menuItems.length > 0 &&
          menuItems.map(({ url, label }, itemIndex) => (
            <NavItem
              key={`primary_nav_item_${itemIndex}`}
              href={url}
              itemProps={itemProps[itemIndex]}
            >
              {label}
            </NavItem>
          ))}
      </ul>
    </StyledPrimaryNav>
  )
}

export default PrimaryNav
