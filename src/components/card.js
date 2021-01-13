import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import vars from '../vars'

const StyledCard = styled.div`
  background-color: ${props => props.bg};
  color: ${props =>
    props.bg !== vars.colorWhite ? vars.colorWhite : vars.colorBlack};
  padding: 2em;
  border-radius: ${vars.borderRadiusSmall};
  box-shadow: 0 3px 40px #150000;
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 0;
    font-weight: ${vars.fontWeightBolder};
    font-size: ${vars.fontSizeHeading1};

    span {
      font-weight: ${vars.fontWeightBold};
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

const Card = ({ title, body, link, backgroundColor }) => {
  return (
    <StyledCard bg={backgroundColor}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {link && <Link to={link}>Read More</Link>}
    </StyledCard>
  )
}

export default Card
