import React from 'react'
import styled from 'styled-components'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { BiMenuAltRight } from '@react-icons/all-files/bi/BiMenuAltRight'
import { BiX } from '@react-icons/all-files/bi/BiX'
import { CSSTransition } from 'react-transition-group'

import PrimaryNav from './primary-nav'
import SecondaryNav from './secondary-nav'
import Logo from './logo'
import { Container } from '../styled/global'
import MobileNavButton from '../styled/mobile-nav-button'
import MobileNav from './mobile-nav'

import vars from '../../vars'
import getArraySlice from '../../utils/getArraySlice'
import useMenuData from '../../utils/hooks/useMenuData'

const StyledHeader = styled.header`
  background-color: ${vars.colorBlack};
  color: ${vars.colorWhite};
  box-shadow: 0 0.188rem 1.875rem rgba(0, 0, 0, 0.48);
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

const FlexNav = styled.nav`
  display: none;

  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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

const MobileNavWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 7rem;
  background-color: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  padding: 1em;

  &.mobile-nav-enter {
    opacity: 0;
    transform: translateY(-5%);
  }
  &.mobile-nav-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 250ms ${vars.ease};
  }
  &.mobile-nav-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.mobile-nav-exit-active {
    opacity: 0;
    transform: translateY(-5%);
    transition: all 250ms ${vars.ease};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: none;
  }
`

const Header = ({ currentPageSlug }) => {
  // This is a custom hook to query for menu data.
  // Hooks are a built-in tool of React that let us separate a lot of the business logic out of our components and let them just worry about displaying the template.
  // See https://reactjs.org/docs/hooks-custom.html for more info
  const [
    { primaryMenuData, secondaryMenuData, mobileMenuData },
    menuItemsCount,
  ] = useMenuData()
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(menuItemsCount)

  const primaryItemProps = getArraySlice(itemProps, 0, primaryMenuData.length)
  const secondaryItemProps = getArraySlice(
    itemProps,
    primaryMenuData.length,
    itemProps.length
  )

  return (
    <StyledHeader>
      <Container>
        <NavWrapper>
          <Logo />
          <MobileNavButton
            aria-label={`${isOpen ? 'Close' : 'Open'} mobile menu`}
            {...buttonProps}
          >
            {isOpen ? <BiX /> : <BiMenuAltRight />}
          </MobileNavButton>
          <FlexNav>
            <PrimaryNav
              itemProps={primaryItemProps}
              menuItems={primaryMenuData}
              currentPageSlug={currentPageSlug}
            />
            <SecondaryNav
              itemProps={secondaryItemProps}
              menuItems={secondaryMenuData}
              currentPageSlug={currentPageSlug}
            />
          </FlexNav>
          <CSSTransition
            in={isOpen}
            timeout={250}
            classNames="mobile-nav"
            unmountOnExit
          >
            <MobileNavWrapper className={isOpen ? 'visible' : ''} role="menu">
              <MobileNav
                itemProps={itemProps}
                currentPageSlug={currentPageSlug}
                menuItems={mobileMenuData}
              />
            </MobileNavWrapper>
          </CSSTransition>
        </NavWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
