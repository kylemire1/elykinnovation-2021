import React from 'react'
import { graphql } from 'gatsby'

import HeroSection from '../components/hero-section'
import ThreeCards from '../components/three-cards'
import Motto from '../components/motto'
import SixCards from '../components/six-cards'
import Spacer from '../components/spacer'
import PortfolioPreview from '../components/portfolio-preview'

import Layout from '../components/layout'

const WpPageTemplate = ({ data }) => {
  const layoutSections = data.page.layoutSections.components
  const isHomePage = data.page.isFrontPage

  return (
    <Layout isHomePage={isHomePage}>
      {layoutSections.map((section, index) => {
        switch (section.fieldGroupName) {
          case 'page_Layoutsections_Components_HomepageHero':
            return <HeroSection key={`HomepageHero_${index}`} {...section} />

          case 'page_Layoutsections_Components_ThreeCardRow':
            return <ThreeCards key={`ThreeCardRow_${index}`} {...section} />

          case 'page_Layoutsections_Components_MottoSection':
            return <Motto key={`MottoSection_${index}`} {...section} />

          case 'page_Layoutsections_Components_SixCardGrid':
            return <SixCards key={`SixCardGrid_${index}`} {...section} />

          case 'page_Layoutsections_Components_Spacer':
            return <Spacer key={`Spacer_${index}`} {...section} />

          case 'page_Layoutsections_Components_PortfolioPreview':
            return (
              <PortfolioPreview
                key={`PortfolioPreview_${index}`}
                {...section}
              />
            )
        }
      })}
    </Layout>
  )
}

export default WpPageTemplate

export const pageQuery = graphql`
  query WpPageById(
    # this variable is passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    page: wpPage(id: { eq: $id }) {
      id
      isFrontPage
      layoutSections {
        components {
          ...HeroSection
          ...ThreeCardRow
          ...MottoSection
          ...SixCardGrid
          ...Spacer
          ...PortfolioPreview
        }
      }
    }
  }
`
