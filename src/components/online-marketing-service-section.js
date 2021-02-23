import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Section, Container, SectionHeading } from './styled/global'
import Button from './button'

import vars from '../vars'

const BoxGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const BoxGridItem = styled.div`
  color: ${({ bg }) =>
    bg === 'colorWhite' ? vars.colorAlmostBlack : vars.colorWhite};
  border: solid ${vars.pixel};
  border-color: ${({ border }) => vars[border]};
  border-radius: ${vars.borderRadiusSmall};
  padding: 3em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: ${vars.fontSizeHeading2};
    font-weight: ${vars.fontWeightNormal};
    line-height: 1.3;
    margin-bottom: 0;
    text-align: center;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    padding: 1em 4em;
  }
`

const OnlineMarketingServiceSection = ({
  buttonLink,
  buttonText,
  contentBoxBorderColor,
  mainHeadingText,
  sectionBackgroundColor,
  smallGreenHeadingText,
  boxes,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        {mainHeadingText && (
          <SectionHeading>
            {smallGreenHeadingText && <span>{smallGreenHeadingText} </span>}
            {mainHeadingText}
          </SectionHeading>
        )}
        <BoxGrid>
          {boxes &&
            boxes.map(({ boxText }, boxIndex) => (
              <BoxGridItem
                key={`${boxText}_component_${boxIndex}`}
                border={contentBoxBorderColor}
                bg={sectionBackgroundColor}
              >
                <p>{boxText}</p>
              </BoxGridItem>
            ))}
        </BoxGrid>
        {buttonText && buttonLink && (
          <Button
            elementType="link"
            buttonStyle={
              sectionBackgroundColor === 'colorGreen' ? 'outline' : 'red'
            }
            href={buttonLink}
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment OnlineMarketingServiceSection on WpPage_Layoutsections_Components_OnlineMarketing {
    buttonLink
    buttonText
    contentBoxBorderColor
    fieldGroupName
    mainHeadingText
    sectionBackgroundColor
    smallGreenHeadingText
    boxes {
      boxText
    }
  }
`

export default OnlineMarketingServiceSection
