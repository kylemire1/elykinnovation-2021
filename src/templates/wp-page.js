import React from 'react'
import { graphql } from 'gatsby'

import HeroSection from '../components/hero-section'
import ThreeCards from '../components/three-cards'
import Motto from '../components/motto'
import SixCards from '../components/six-cards'
import Spacer from '../components/spacer'
import PortfolioPreview from '../components/portfolio-preview'
import Layout from '../components/layout'
import LargeServiceCardSection from '../components/large-service-card-section'
import OnlineMarketingServiceSection from '../components/online-marketing-service-section'

const WpPageTemplate = ({ data }) => {
  const layoutSections = data.page.layoutSections.components
  const isHomePage = data.page.isFrontPage

  return (
    <Layout isHomePage={isHomePage}>
      {layoutSections &&
        layoutSections.map((section, sectionIndex) => {
          switch (section.fieldGroupName) {
            case 'page_Layoutsections_Components_HomepageHero':
              return (
                <HeroSection
                  key={`HomepageHero_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_ThreeCardRow':
              return (
                <ThreeCards key={`ThreeCardRow_${sectionIndex}`} {...section} />
              )

            case 'page_Layoutsections_Components_MottoSection':
              return <Motto key={`MottoSection_${sectionIndex}`} {...section} />

            case 'page_Layoutsections_Components_SixCardGrid':
              return (
                <SixCards key={`SixCardGrid_${sectionIndex}`} {...section} />
              )

            case 'page_Layoutsections_Components_Spacer':
              return <Spacer key={`Spacer_${sectionIndex}`} {...section} />

            case 'page_Layoutsections_Components_PortfolioPreview':
              return (
                <PortfolioPreview
                  key={`PortfolioPreview_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_LargeServiceCardSection':
              return (
                <LargeServiceCardSection
                  key={`LargeServiceCardSection_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_OnlineMarketing':
              return (
                <OnlineMarketingServiceSection
                  key={`OnlineMarketing_${sectionIndex}`}
                  {...section}
                />
              )

            default:
              return null
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
          ...LargeServiceCardSection
          ...OnlineMarketingServiceSection
        }
      }
    }
  }
`
