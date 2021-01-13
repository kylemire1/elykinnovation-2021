import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Container, Section } from './styled/global'

import vars from '../vars'

const MottoWrapper = styled.div`
  display: grid;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    > div:first-child {
      border-right: solid 2px ${vars.colorGreen};
    }
  }
`

const MottoHeading = styled.h2`
  font-size: ${vars.fontSizeHeading4};

  @media (min-width: ${vars.breakpointLarge}) {
    font-size: ${vars.fontSizeHeading5};
  }
`

const MottoContent = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    margin-left: 0.5em;
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
          <div>
            <MottoHeading>
              <span className="green-subtext">{smallGreenHeadingText}</span>
              {mainHeadingText}
            </MottoHeading>
          </div>
          <MottoContent
            dangerouslySetInnerHTML={{ __html: paragraphContent }}
          />
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
