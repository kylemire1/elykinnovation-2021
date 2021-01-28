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
import SubpageHeroLarge from '../components/subpage-hero-large'
import TextWithImageSection from '../components/text-with-image-section'
import IndustrySection from '../components/industry-section'
import WysiwygContent from '../components/wysiwyg-content'

const WpPageTemplate = ({ data }) => {
  const layoutSections = data.page.layoutSections.components
  const isHomePage = data.page.isFrontPage
  const currentPageSlug = data.page.slug

  return (
    <Layout isHomePage={isHomePage} currentPageSlug={currentPageSlug}>
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

            case 'page_Layoutsections_Components_SubpageHeroLarge':
              return (
                <SubpageHeroLarge
                  key={`SubpageHeroLarge_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_TextContentWithImage':
              return (
                <TextWithImageSection
                  key={`TextContentWithImage_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_IndustrySection':
              return (
                <IndustrySection
                  key={`IndustrySection_${sectionIndex}`}
                  {...section}
                />
              )

            case 'page_Layoutsections_Components_WysiwygContentPanel':
              return (
                <WysiwygContent
                  key={`WysiwygContent_${sectionIndex}`}
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
      slug
      id
      isFrontPage
      layoutSections {
        components {
          # these are GraphQL fragments. They are essentially placeholders for the 'fragment' queries exported from their respective components
          # they let us keep the concerns of our code separated, and keep a large query like this looking clean
          ...HeroSection
          ...ThreeCardRow
          ...MottoSection
          ...SixCardGrid
          ...Spacer
          ...PortfolioPreview
          ...LargeServiceCardSection
          ...OnlineMarketingServiceSection
          ...SubpageHeroLarge
          ...TextWithImageSection
          ...IndustriesSection
          ...WysiwygContent
        }
      }
    }
  }
`
