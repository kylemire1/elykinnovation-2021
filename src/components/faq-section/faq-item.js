import React, { useState } from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { rgba } from 'polished'

import Plus from '../icons/plus'

import vars from '../../vars'

const StyledFaqItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1em;
  border: solid ${vars.pixel};
  border-radius: ${vars.borderRadiusLarge};
  border-color: ${rgba(vars.colorGreenSmall, 0)};
  transition: border-color 250ms ${vars.ease};

  :hover,
  :focus,
  :focus-within {
    border-color: ${rgba(vars.colorGreenSmall, 1)};
    transition: border-color 250ms ${vars.ease};
  }

  svg {
    max-width: 1.75rem;

    path {
      fill: ${vars.colorGreenSmall};
      transition: fill 250ms ${vars.ease};
    }

    .plus-line {
      opacity: 1;
      transition: opacity 250ms ${vars.ease};
    }
  }

  &.open {
    border-color: ${rgba(vars.colorGreenSmall, 1)};
    transition: border-color 250ms ${vars.ease};
    svg {
      path {
        fill: ${vars.colorRed};
        transition: fill 250ms ${vars.ease};
      }

      .plus-line {
        opacity: 0;
        transition: opacity 250ms ${vars.ease};
      }
    }
  }
`

const FaqItemInner = styled.div`
  margin-left: 1rem;
`

const Question = styled.h3`
  color: ${vars.colorGreen};
  font-weight: ${vars.fontWeightBolder};
  font-size: ${vars.fontSizeHeading2};
`

const Answer = styled.div`
  position: relative;
  z-index: 1;

  p {
    overflow: hidden;
    height: 100%;
    max-height: 6.125rem;
    transition: all 250ms ${vars.ease};
  }

  p:last-child {
    margin-bottom: 0;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(200, 209, 209, 0) 0%,
      rgba(232, 235, 235, 1) 100%
    );
    opacity: 1;
    z-index: 2;
    transition: all 250ms ${vars.ease};
  }

  &.open {
    p {
      max-height: 67.5rem;
      transition: all 250ms ${vars.ease};
    }
    ::after {
      top: 100%;
      opacity: 9;
      transition: all 250ms ${vars.ease};
    }
  }
`

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <StyledFaqItem className={isOpen ? 'open' : 'closed'}>
      <Plus onClick={toggleOpen} />
      <FaqItemInner onClick={toggleOpen}>
        <Question>{question}</Question>
        <Answer className={isOpen ? 'open' : 'closed'}>{parse(answer)}</Answer>
      </FaqItemInner>
    </StyledFaqItem>
  )
}

export default FaqItem
