import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '../vars'
import arrowSrc from '../../content/assets/arrow.svg'

const StyledLink = styled(Link)`
  text-align: center;
  color: ${vars.colorWhite};
  text-decoration: none;
  border-radius: ${vars.borderRadiusSmall};
  cursor: pointer;

  &.green {
    background-color: ${vars.colorGreen};
    padding: 1.25em 2em;
    display: inline-block;
    margin: 0 auto;
    transition: background-color 250ms ${vars.ease};

    &:hover,
    &:focus,
    &:focus-within {
      background-color: ${vars.colorBlack};
      transition: background-color 250ms ${vars.ease};
    }
  }

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
        transform: translateX(0.125rem);
        transition: transform 250ms ${vars.ease};
      }
    }
  }
`

const StyledButton = styled.button`
  text-align: center;
  color: ${vars.colorWhite};
  text-decoration: none;
  border-radius: ${vars.borderRadiusSmall};
  cursor: pointer;

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
  border-top-right-radius: ${vars.borderRadiusSmall};
  border-bottom-right-radius: ${vars.borderRadiusSmall};
`

const Button = ({ elementType, buttonStyle, children, href, handleClick }) => {
  switch (elementType) {
    case 'link':
      return (
        <StyledLink className={`btn ${buttonStyle}`} to={href}>
          {buttonStyle === 'red' ? (
            <>
              <TextWrapper>{children}</TextWrapper>
              <IconWrapper>
                <img src={arrowSrc} alt="" />
              </IconWrapper>
            </>
          ) : (
            <>{children}</>
          )}
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
