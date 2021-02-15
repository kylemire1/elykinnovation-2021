import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '../../vars'
import logoSrc from '../../../content/assets/logo-final.png'

const LogoWrapper = styled.div`
  background-color: ${vars.colorRed};
  display: flex;
  align-items: center;
  width: 65%;
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
    border-width: 0 5.6rem 5.6rem 0;
    right: 0;
    border-color: transparent ${vars.colorBlack} transparent transparent;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    width: 38%;

    &::after {
      border-width: 0 4.95rem 4.95rem 0;
    }
  }
`

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img
          src={logoSrc}
          alt="Elyk Innovation Inc.: Internet Strategy by Design"
        />
      </Link>
    </LogoWrapper>
  )
}

export default Logo
