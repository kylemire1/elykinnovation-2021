import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '../vars'
import arrowSrc from '../../content/assets/arrow.svg'

const StyledLink = styled(Link)`
  text-align: center;
  color: currentColor;
  text-decoration: none;
  border-radius: 5px;

  &.red {
    display: inline-grid;
    grid-template-columns: 1fr 2.813em;
    background: ${vars.colorRed};
    transition: background 250ms ${vars.ease};

    img {
      transform: translateX(0);
      transition: transform 250ms ${vars.ease};
      will-change: transform;
    }

    &:hover,
    &:focus {
      transition: background 250ms ${vars.ease};
      background: ${vars.colorDarkRed};

      img {
        transform: translateX(2px);
        transition: transform 250ms ${vars.ease};
      }
    }
  }
`

const StyledButton = styled.button`
  text-align: center;
  color: currentColor;
  text-decoration: none;
  border-radius: 5px;

  &.red {
    display: inline-grid;
    grid-template-columns: 1fr 2.813em;
    background: ${vars.colorRed};
  }
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85em;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${vars.colorDarkRed};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const Button = ({ elementType, buttonStyle, children, href, handleClick }) => {
  switch (elementType) {
    case 'link':
      return (
        <StyledLink className={buttonStyle} to={href}>
          <TextWrapper>{children}</TextWrapper>
          <IconWrapper>
            <img src={arrowSrc} alt="" />
          </IconWrapper>
        </StyledLink>
      )
    default:
      return (
        <StyledButton className={buttonStyle} onClick={handleClick}>
          <TextWrapper>{children}</TextWrapper>
          <IconWrapper>
            <img src={arrowSrc} alt="" />
          </IconWrapper>
        </StyledButton>
      )
  }
}

export default Button
