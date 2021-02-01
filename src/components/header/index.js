import React from 'react'
import styled from 'styled-components'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { BiMenuAltRight } from '@react-icons/all-files/bi/BiMenuAltRight'
import { BiX } from '@react-icons/all-files/bi/BiX'

import PrimaryNav from './primary-nav'
import SecondaryNav from './secondary-nav'
import Logo from './logo'
import { Container } from '../styled/global'
import MobileNavButton from '../styled/mobile-nav-button'

import vars from '../../vars'
import getArraySlice from '../../utils/getArraySlice'

const StyledHeader = styled.header`
  background-color: ${vars.colorBlack};
  color: ${vars.colorWhite};
  height: ${vars.headerHeight};
  box-shadow: 0 0.188rem 1.875rem rgba(0, 0, 0, 0.48);
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

const FlexNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: absolute;
  z-index: 99;
  top: 4.625rem;
  margin-top: 0.75rem;
  width: 100%;
  background: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  overflow-y: hidden;
  padding: 1em 0;
  opacity: 0;
  transform: translateY(-50rem);
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

const Header = ({
  primaryMenuData,
  secondaryMenuData,
  menuItemsCount,
  currentPageSlug,
}) => {
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
          <FlexNav className={isOpen ? 'visible' : ''} role="menu">
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
        </NavWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
