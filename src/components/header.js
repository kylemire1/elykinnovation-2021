import React from 'react'
import styled from 'styled-components'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { BiMenuAltRight } from '@react-icons/all-files/bi/BiMenuAltRight'
import { BiX } from '@react-icons/all-files/bi/BiX'

import { Container } from './styled/global'
import NavItem from './nav-item'
import logoSrc from '../../content/assets/logo-final.png'

import vars from '../vars'

const StyledHeader = styled.header`
  background-color: ${vars.colorBlack};
  color: ${vars.colorWhite};
  height: 74px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.48);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`

const NavWrapper = styled.div`
  display: flex;
  position: relative;
`

const PrimaryNav = styled.div`
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
    border: solid 1px ${vars.colorGreen};
    border-radius: ${vars.borderRadiusLarge};
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

const SecondaryNav = styled(PrimaryNav)`
  order: 2;
  margin: 0 1em;
  li {
    width: 100%;
    text-align: center;
    padding: 0.75em;
    background-color: ${vars.colorAlmostBlack};
    border-radius: ${vars.borderRadiusLarge};
    border: solid 1px ${vars.colorAlmostBlack};
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

const FlexNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: absolute;
  z-index: 99;
  top: 74px;
  margin-top: 0.75rem;
  width: 100%;
  background: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  overflow-y: hidden;
  overflow-y: hidden;
  padding: 1em 0;
  opacity: 0;
  transition: all 500ms ${vars.ease};

  &.visible {
    opacity: 1;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    opacity: 1;
    position: relative;
    z-index: 99;
    margin-top: 0;
    width: 100%;
    background: none;
    border-radius: 0;
    padding: 0;
    top: 0;
    max-height: 100%;
    justify-content: space-between;
    padding: 0.5em 0;
  }
`

const LogoWrapper = styled.div`
  background-color: ${vars.colorRed};
  display: flex;
  align-items: center;
  width: 32%;
  position: relative;

  img {
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 999%;
    z-index: 0;
    height: 100%;
    background-color: ${vars.colorRed};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5.762em 5.762em 0;
    right: 0;
    border-color: transparent ${vars.colorBlack} transparent transparent;
  }
`

const MobileNavButton = styled.button`
  display: block;
  margin-left: auto;
  background: none;
  border: none;
  color: ${vars.colorWhite};
  font-size: 1rem;
  min-width: 3rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: none;
  }
`

const Header = () => {
  const MENU_ITEMS_COUNT = 11 // Temporary hard-coded data
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    MENU_ITEMS_COUNT
  )

  return (
    <StyledHeader>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <img
              src={logoSrc}
              alt="Elyk Innovation Inc.: Internet Strategy by Design"
            />
          </LogoWrapper>
          <MobileNavButton {...buttonProps}>
            {isOpen ? <BiX /> : <BiMenuAltRight />}
          </MobileNavButton>
          <FlexNav className={isOpen ? 'visible' : ''} role="menu">
            <PrimaryNav>
              <ul>
                <NavItem itemProps={itemProps[0]}>Website Design</NavItem>
                <NavItem itemProps={itemProps[1]}>
                  Web & App Development
                </NavItem>
                <NavItem itemProps={itemProps[2]}>Website Maintenance</NavItem>
                <NavItem itemProps={itemProps[3]}>
                  Website Accessibility
                </NavItem>
                <NavItem itemProps={itemProps[4]}>Online Marketing</NavItem>
              </ul>
            </PrimaryNav>
            <SecondaryNav>
              <ul>
                <NavItem itemProps={itemProps[5]}>About</NavItem>
                <NavItem itemProps={itemProps[6]}>Services</NavItem>
                <NavItem itemProps={itemProps[7]}>Portfolio</NavItem>
                <NavItem itemProps={itemProps[8]}>FAQ</NavItem>
                <NavItem itemProps={itemProps[9]}>Blog</NavItem>
                <NavItem itemProps={itemProps[10]}>Contact</NavItem>
              </ul>
            </SecondaryNav>
          </FlexNav>
        </NavWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
