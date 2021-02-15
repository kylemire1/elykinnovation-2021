import React from 'react'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { MainContent } from './styled/global'

const Layout = ({
  seoData,
  isHomePage,
  children,
  currentPageSlug,
  isPrimaryPage,
}) => {
  return (
    <div
      className={`body-wrapper ${currentPageSlug} ${
        isPrimaryPage ? 'primary' : 'secondary'
      }`}
    >
      <SEO title={seoData?.title} description={seoData?.metaDesc} />
      <Header currentPageSlug={currentPageSlug} />

      <MainContent home={isHomePage}>{children}</MainContent>

      <Footer />
    </div>
  )
}

export default Layout
