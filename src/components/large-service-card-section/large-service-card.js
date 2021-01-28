import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

import Button from '../button'
import { SectionHeading } from '../styled/global'

import vars from '../../vars'
import checkSrc from '../../../content/assets/check-bullet.svg'

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: ${vars.colorBlack};
  border-radius: ${vars.borderRadiusLarge};
  position: relative;
  z-index: 2;

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 2rem 3rem;
    align-items: center;
  }
  @media (min-width: ${vars.breakpointExtraLarge}) {
    min-height: 42rem;
  }
`

const CardHeading = styled(SectionHeading)`
  margin-bottom: 1rem;
`

const CardContent = styled.div`
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
  margin-top: 2rem;
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
    <ServiceCard>
      <CardContent>
        <CardHeading bg="colorBlack">
          <span>{smallGreenHeadingText} </span>
          {mainHeadingText}
        </CardHeading>
        {parse(cardContent)}
        {buttonText && buttonLink && (
          <ServiceCardButton>
            <Button elementType="link" buttonStyle="red" href={buttonLink}>
              {buttonText}
            </Button>
          </ServiceCardButton>
        )}
      </CardContent>
    </ServiceCard>
  )
}

export default LargeServiceCard
