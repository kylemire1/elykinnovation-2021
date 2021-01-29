import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import vars from '../vars'
import arrowSrc from '../../content/assets/arrow.svg'

const StyledCard = styled.div`
  background-color: ${({ bg }) => vars[bg]};
  color: ${({ bg }) =>
    bg !== 'colorWhite' ? vars.colorWhite : vars.colorBlack};
  padding: 2em;
  border: solid ${vars.pixel};
  border-color: ${({ bg }) =>
    bg === 'colorTransparent' ? vars.colorWhite : vars[bg]};
  border-radius: ${vars.borderRadiusSmall};
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: ${vars.fontWeightBolder};
    font-size: ${vars.fontSizeHeading1};
    color: ${({ bg }) =>
      bg !== 'colorWhite' ? vars.colorWhite : vars.colorBlack};

    span {
      font-weight: ${vars.fontWeightBold};
    }
  }

  .no-link p {
    margin-bottom: 0;
  }

  &.large-heading {
    > h2 {
      margin-bottom: 1rem;
      margin-top: 0;
      font-weight: ${vars.fontWeightNormal};
      font-size: ${vars.fontSizeHeading2};
      color: ${({ bg }) =>
        bg !== 'colorWhite' ? vars.colorWhite : vars.colorBlack};

      span {
        font-weight: ${vars.fontWeightBold};
      }
    }

    @media (min-width: ${vars.breakpointLarge}) {
      > h2 {
        text-align: center;
        font-size: ${vars.fontSizeHeading3};
      }
    }
  }

  a {
    display: block;
    margin-top: auto;
    color: currentColor;
    text-decoration: none;
    font-weight: ${vars.fontWeightBolder};
    font-size: ${vars.fontSizeText};
  }
`

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid ${vars.pixel};
  border-color: rgba(234, 234, 234, 0);
  border-radius: ${vars.borderRadiusSmall};
  padding: 0.5rem;
  margin: -0.5rem;
  transition: border-color 250ms ${vars.ease};

  img {
    will-change: transform;
    transform: translateX(0);
    transition: transform 250ms ${vars.ease};
  }

  &:hover,
  &:focus {
    border-color: rgba(234, 234, 234, 1);
    transition: border-color 250ms ${vars.ease};

    img {
      transform: translateX(0.125rem);
      transition: transform 250ms ${vars.ease};
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 0.75rem;
    margin: -0.75rem;
  }
`

const Card = ({ largeHeading, title, body, link, backgroundColor }) => {
  return (
    <StyledCard
      bg={backgroundColor}
      className={largeHeading ? 'large-heading' : ''}
    >
      {title && <h2>{parse(title)}</h2>}
      {body && (
        <div className={`margin ${!link ? 'no-link' : null}`}>
          {parse(body)}
        </div>
      )}
      {link && (
        <Link to={link}>
          <ReadMore>
            Read More
            <img src={arrowSrc} alt="" />
          </ReadMore>
        </Link>
      )}
    </StyledCard>
  )
}

export default Card
