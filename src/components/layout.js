import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { MainContent } from './styled/global'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <SEO title={title} />
      <Header />

      <MainContent home={isHomePage}>{children}</MainContent>

      <Footer />
    </div>
  )
}

export default Layout
