import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'

import Button from './button'
import { Section, Container } from './styled/global'

import vars from '../vars'

const ContentGrid = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: 2fr 1fr;
  }
`

const MainContent = styled.div`
  margin-bottom: 1.5rem;

  h2,
  h3,
  h4,
  h5 {
    color: ${vars.colorGreen};
    font-size: ${vars.fontSizeHeading4};
    font-weight: ${vars.fontWeightBolder};
  }

  a {
    margin-top: 1rem;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    margin-bottom: 0;
  }
`

const SideContent = styled.div`
  h2,
  h3,
  h4,
  h5 {
    color: ${vars.colorGreen};
    font-size: ${vars.fontSizeHeading2};
    font-weight: ${vars.fontWeightBolder};
  }

  @media (min-width: ${vars.breakpointLarge}) {
    justify-self: end;
  }
`

const SideCard = styled.div`
  border: solid ${vars.pixel} ${vars.colorGreenSmall};
  padding: 1.5em 2em;
  border-radius: ${vars.borderRadiusLarge};
  min-height: 30rem;

  ul {
    margin-bottom: 0;
  }
`

const WysiwygContentWithSideCard = ({
  buttonLink,
  buttonText,
  cardContent,
  mainContent,
  showButton,
}) => {
  return (
    <Section bg={'colorTransparent'}>
      <Container>
        <ContentGrid>
          <MainContent>
            {parse(mainContent)}
            {showButton && (
              <Button buttonStyle="red" elementType="link" href={buttonLink}>
                {buttonText}
              </Button>
            )}
          </MainContent>
          <SideContent>
            <SideCard>{parse(cardContent)}</SideCard>
          </SideContent>
        </ContentGrid>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment WysiwygContentWithSideCard on WpPage_Layoutsections_Components_WysiwygTextSideCard {
    buttonLink
    buttonText
    cardContent
    mainContent
    fieldGroupName
    showButton
  }
`

export default WysiwygContentWithSideCard
