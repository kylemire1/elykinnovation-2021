import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

import Button from '../components/button'
import { SectionHeading } from '../components/styled/global'

import vars from '../vars'
import checkSrc from '../../content/assets/check-bullet.svg'

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  min-height: 46.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 2rem 3rem;
  }
`

const CardHeading = styled(SectionHeading)`
  margin-bottom: 1rem;
`

const CardContent = styled.div`
  margin-bottom: 2rem;

  h3,
  h4,
  h5 {
    font-size: ${vars.fontSizeHeading1};
    font-weight: ${vars.fontWeightBolder};
  }

  li {
    background-image: url(${checkSrc});
    background-position: top 0.25em left;
  }
`

const ServiceCardButton = styled.div`
  width: 100%;
`

const LargeServiceCard = ({
  cardContent,
  mainHeadingText,
  smallGreenHeadingText,
  buttonLink,
  buttonText,
}) => {
  return (
    <ServiceCard bg="colorAlmostBlack">
      <CardContent>
        <CardHeading bg="colorBlack">
          <span>{smallGreenHeadingText} </span>
          {mainHeadingText}
        </CardHeading>
        {parse(cardContent)}
      </CardContent>
      <ServiceCardButton>
        <Button elementType="link" buttonStyle="red" href={buttonLink}>
          {buttonText}
        </Button>
      </ServiceCardButton>
    </ServiceCard>
  )
}

export default LargeServiceCard
