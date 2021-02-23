import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import vars from '../vars'
import arrowRightSrc from '../../content/assets/arrow.svg'
import arrowLeftSrc from '../../content/assets/arrow-left.svg'

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
    display: inline-flex;
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
        transform: translateX(
          ${({ arrow }) => (arrow === 'right' ? '0.125rem' : '-0.125rem')}
        );
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
  border-top-right-radius: ${({ arrow }) =>
    arrow === 'right' ? vars.borderRadiusSmall : 0};
  border-bottom-right-radius: ${({ arrow }) =>
    arrow === 'right' ? vars.borderRadiusSmall : 0};
  border-top-left-radius: ${({ arrow }) =>
    arrow === 'left' ? vars.borderRadiusSmall : 0};
  border-bottom-left-radius: ${({ arrow }) =>
    arrow === 'left' ? vars.borderRadiusSmall : 0};
  border-left: ${({ btn, arrow }) =>
    btn === 'red' || arrow !== 'right'
      ? 'none'
      : `solid ${vars.pixel} ${vars.colorWhite}`};
  border-right: ${({ btn, arrow }) =>
    btn === 'red' || arrow !== 'left'
      ? 'none'
      : `solid ${vars.pixel} ${vars.colorWhite}`};
  width: 3rem;

  img {
    transform: ${({ arrow }) =>
      arrow === 'right' ? 'rotateX(0)' : 'rotateX(180deg)'};
  }
`
// This component could use a refactor
// Each style of button should be abstracted into its own component
// so this component could just focus on doing the switch to show the correct button.
const Button = ({
  elementType,
  buttonStyle,
  children,
  href,
  handleClick,
  arrowDirection = 'right',
}) => {
  switch (elementType) {
    case 'link':
      return (
        <StyledLink
          arrow={arrowDirection}
          className={`btn ${buttonStyle}`}
          to={href}
        >
          {['red', 'outline'].includes(buttonStyle) ? (
            <>
              {arrowDirection === 'right' ? (
                <>
                  <TextWrapper className="text-wrapper">{children}</TextWrapper>
                  <IconWrapper arrow={arrowDirection} btn={buttonStyle}>
                    <img src={arrowRightSrc} alt="" />
                  </IconWrapper>
                </>
              ) : (
                <>
                  <IconWrapper arrow={arrowDirection} btn={buttonStyle}>
                    <img src={arrowLeftSrc} alt="" />
                  </IconWrapper>
                  <TextWrapper className="text-wrapper">{children}</TextWrapper>
                </>
              )}
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
              <TextWrapper className="text-wrapper">{children}</TextWrapper>
              <IconWrapper arrow={arrowDirection} btn={buttonStyle}>
                <img src={arrowRightSrc} alt="" />
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
