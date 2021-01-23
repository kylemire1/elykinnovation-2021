import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import vars from '../vars'

const StyledCard = styled.div`
  background: black;
  max-height: 19rem;
  overflow: hidden;
  border-radius: ${vars.borderRadiusSmall};
  position: relative;

  a {
    color: currentColor;
    font-weight: ${vars.fontWeightBold};
  }
`

const CardTag = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 0;
  padding: 0.75em 1em;
`

const ClientName = styled(CardTag)`
  background-color: ${vars.colorBlack};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 2.65rem 2.65rem 0;
    right: -2.62rem;
    top: 0;
    bottom: 0;
    border-color: transparent transparent ${vars.colorBlack};
    z-index: 10;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 2.65rem 2.65rem 0;
    right: -3rem;
    top: 0.031rem;
    bottom: 0;
    border-color: transparent transparent ${vars.colorRed};
    z-index: 5;
  }
`

const ClientNameBacking = styled(CardTag)`
  background-color: ${vars.colorRed};
  z-index: 1;
  position: absolute;
  padding-right: 1.375rem;
  bottom: 0;
`

const PortfolioCard = ({ clientImage, clientLink, clientName }) => {
  const cardImage = clientImage?.localFile?.childImageSharp?.fluid

  return (
    <StyledCard>
      <Link to={clientLink}>
        <ClientName>{clientName}</ClientName>
        <ClientNameBacking aria-hidden>{clientName}</ClientNameBacking>
        <Image backgroundColor={vars.colorDarkRed} fluid={cardImage} alt="" />
      </Link>
    </StyledCard>
  )
}

export default PortfolioCard
