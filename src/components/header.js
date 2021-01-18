import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { BiMenuAltRight } from '@react-icons/all-files/bi/BiMenuAltRight'
import { BiX } from '@react-icons/all-files/bi/BiX'

import { Container } from './styled/global'
import MobileNavButton from './styled/mobile-nav-button'
import NavItem from './nav-item'
import logoSrc from '../../content/assets/logo-final.png'

import vars from '../vars'

const StyledHeader = styled.header`
  background-color: ${vars.colorBlack};
  color: ${vars.colorWhite};
  height: ${vars.headerHeight};
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.48);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  @media (min-width: ${vars.breakpointLarge}) {
    height: ${vars.headerHeight};
  }
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
  transform: translateY(-2rem);
  transition: all 500ms ${vars.ease};

  &.visible {
    opacity: 1;
    transform: translateY(0);
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
    transform: translateY(0);
  }
`

const LogoWrapper = styled.div`
  background-color: ${vars.colorRed};
  display: flex;
  align-items: center;
  width: 32%;
  position: relative;

  a {
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
    border-width: 0 ${vars.headerHeight} ${vars.headerHeight} 0;
    right: 0;
    border-color: transparent ${vars.colorBlack} transparent transparent;
  }
`

const Header = () => {
  const MENU_ITEMS_COUNT = 11 // Temporary hard-coded data
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(MENU_ITEMS_COUNT)

  return (
    <StyledHeader>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <Link to="/">
              <img
                src={logoSrc}
                alt="Elyk Innovation Inc.: Internet Strategy by Design"
              />
            </Link>
          </LogoWrapper>
          <MobileNavButton
            aria-label={`${isOpen ? 'Close' : 'Open'} mobile menu`}
            {...buttonProps}
          >
            {isOpen ? <BiX /> : <BiMenuAltRight />}
          </MobileNavButton>
          <FlexNav className={isOpen ? 'visible' : ''} role="menu">
            <PrimaryNav>
              <ul>
                <NavItem href="/test-page" itemProps={itemProps[0]}>
                  Website Design
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[1]}>
                  Web & App Development
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[2]}>
                  Website Maintenance
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[3]}>
                  Website Accessibility
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[4]}>
                  Online Marketing
                </NavItem>
              </ul>
            </PrimaryNav>
            <SecondaryNav>
              <ul>
                <NavItem href="/404" itemProps={itemProps[5]}>
                  About
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[6]}>
                  Services
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[7]}>
                  Portfolio
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[8]}>
                  FAQ
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[9]}>
                  Blog
                </NavItem>
                <NavItem href="/404" itemProps={itemProps[10]}>
                  Contact
                </NavItem>
              </ul>
            </SecondaryNav>
          </FlexNav>
        </NavWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
