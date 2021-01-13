import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import parse from 'html-react-parser'

import HeroSection from '../components/hero-section'
import ThreeCards from '../components/three-cards'
import Motto from '../components/motto'
import SixCards from '../components/six-cards'
import Spacer from '../components/spacer'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const WpPageTemplate = ({ data }) => {
  const layoutSections = data.page.layoutSections.components

  return (
    <Layout>
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
      layoutSections {
        components {
          ...HeroSection
          ...ThreeCardRow
          ...MottoSection
          ...SixCardGrid
          ...Spacer
        }
      }
    }
  }
`
