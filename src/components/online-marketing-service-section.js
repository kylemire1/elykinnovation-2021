import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Section, Container, SectionHeading } from './styled/global'

import vars from '../vars'

const BoxGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const BoxGridItem = styled.div`
  border: solid 1px;
  border-color: ${({ border }) => vars[border]};
  border-radius: ${vars.borderRadiusSmall};
  padding: 1em 4em;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${vars.fontSizeHeading2};
    font-weight: ${vars.fontWeightLight};
    line-height: 1.3;
    margin-bottom: 0;
    text-align: center;
  }
`

const OnlineMarketingServiceSection = ({
  buttonLink,
  buttonText,
  contentBoxBorderColor,
  fieldGroupName,
  mainHeadingText,
  sectionBackgroundColor,
  smallGreenHeadingText,
  boxes,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <SectionHeading>
          <span>{smallGreenHeadingText} </span>
          {mainHeadingText}
        </SectionHeading>
        <BoxGrid>
          {boxes &&
            boxes.map((box, boxIndex) => (
              <BoxGridItem
                key={`${box.boxText}_component_${boxIndex}`}
                border={contentBoxBorderColor}
              >
                <p>{box.boxText}</p>
              </BoxGridItem>
            ))}
        </BoxGrid>
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
