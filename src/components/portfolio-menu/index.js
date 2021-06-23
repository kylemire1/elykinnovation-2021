import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import PortfolioMenuItem from './portfolio-menu-item'
import { Section, Container } from '../../components/styled/global'

import vars from '../../vars'
import iReplaceAll from '../../utils/iReplaceAll'

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: -2rem;

  @media (min-width: ${vars.breakpointMedium}) {
    margin-bottom: -4rem;
  }
`

const PortfolioMenu = () => {
  const portfolioData = useStaticQuery(graphql`
    query PortfolioData {
      wpPage(databaseId: { eq: 348 }) {
        layoutSections {
          components {
            ... on WpPage_Layoutsections_Components_PortfolioCategory {
              fieldGroupName
              categoryName
            }
          }
        }
      }
    }
  `)

  const categoryComponents =
    portfolioData?.wpPage?.layoutSections?.components.filter(
      component =>
        component.fieldGroupName ===
        'page_Layoutsections_Components_PortfolioCategory'
    )
  const categoryNames = getCategoryNames(categoryComponents)

  return (
    <Section id="portfolio-top">
      <Container>
        <StyledMenu>
          {categoryNames.length > 0 &&
            categoryNames.map((name, nameIndex) => (
              <PortfolioMenuItem
                key={`PortfolioMenuItem_${nameIndex}`}
                name={name}
              />
            ))}
        </StyledMenu>
      </Container>
    </Section>
  )
}

const getCategoryNames = categoryComponents =>
  categoryComponents.length > 0 &&
  categoryComponents.map(component =>
    iReplaceAll(component.categoryName, ' websites', '')
  )

export const fragment = graphql`
  fragment PortfolioMenu on WpPage_Layoutsections_Components_PortfolioMenu {
    fieldGroupName
  }
`

export default PortfolioMenu
