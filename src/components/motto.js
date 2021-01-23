import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

import { Container, Section, SectionHeading } from './styled/global'

import vars from '../vars'

const MottoWrapper = styled.div`
  display: grid;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    > div:first-child {
      border-right: solid 2px ${vars.colorGreenSmall};
    }
  }
`

const MottoHeadingWrapper = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MottoHeading = styled(SectionHeading)`
  font-size: ${vars.fontSizeHeading4};
  margin-bottom: 1rem;

  @media (min-width: ${vars.breakpointLarge}) {
    font-size: ${vars.fontSizeHeading5};
  }
`

const MottoContent = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5em;
    p {
      margin-bottom: 0;
      font-size: ${vars.fontSizeTextLarge};
    }
  }
`

const Motto = ({
  mainHeadingText,
  paragraphContent,
  smallGreenHeadingText,
  sectionBackgroundColor,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <MottoWrapper>
          <MottoHeadingWrapper>
            <MottoHeading>
              <span className="green-subtext">{smallGreenHeadingText}</span>
              {mainHeadingText}
            </MottoHeading>
          </MottoHeadingWrapper>
          <MottoContent>{parse(paragraphContent)}</MottoContent>
        </MottoWrapper>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment MottoSection on WpPage_Layoutsections_Components_MottoSection {
    fieldGroupName
    mainHeadingText
    paragraphContent
    smallGreenHeadingText
    sectionBackgroundColor
  }
`

export default Motto
