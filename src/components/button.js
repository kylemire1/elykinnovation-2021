import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import vars from '../vars'
import arrowSrc from '../../content/assets/arrow.svg'

const styles = css`
  text-align: center;
  color: ${vars.colorWhite};
  font-size: ${vars.fontSizeText};
  font-weight: ${vars.fontWeightNormal};
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
      background-color: ${darken(0.05, vars.colorGreen)};
      transition: background-color 250ms ${vars.ease};
    }
  }

  &.red,
  &.outline {
    display: inline-grid;
    grid-template-columns: 1fr 2.813em;
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

  &.red {
    background: ${vars.colorRed};

    &:hover,
    &:focus {
      background: ${vars.colorDarkRed};
    }
  }

  &.outline {
    background: ${vars.colorTransparent};
    border: solid ${vars.pixel} ${vars.colorWhite};

    &:hover,
    &:focus {
      background: ${vars.colorTransparent};
    }
  }
`

const StyledLink = styled(Link)`
  ${styles}
`

const StyledButton = styled.button`
  border: none;
  ${styles}
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
  background-color: ${({ btn }) =>
    btn === 'red' ? vars.colorDarkRed : vars.colorGreenSmall};
  border-top-right-radius: ${vars.borderRadiusSmall};
  border-bottom-right-radius: ${vars.borderRadiusSmall};
  border-left: ${({ btn }) =>
    btn === 'red' ? 'none' : `solid ${vars.pixel} ${vars.colorWhite}`};
`

const Button = ({ elementType, buttonStyle, children, href, handleClick }) => {
  switch (elementType) {
    case 'link':
      return (
        <StyledLink className={`btn ${buttonStyle}`} to={href}>
          {['red', 'outline'].includes(buttonStyle) ? (
            <>
              <TextWrapper>{children}</TextWrapper>
              <IconWrapper btn={buttonStyle}>
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
        <StyledButton
          className={buttonStyle}
          onClick={handleClick}
          role="button"
        >
          {['red', 'outline'].includes(buttonStyle) ? (
            <>
              <TextWrapper>{children}</TextWrapper>
              <IconWrapper btn={buttonStyle}>
                <img src={arrowSrc} alt="" />
              </IconWrapper>
            </>
          ) : (
            <>{children}</>
          )}
        </StyledButton>
      )
  }
}

export default Button
