import React from 'react'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { MainContent } from './styled/global'

import useMenuData from '../utils/hooks/useMenuData'

const Layout = ({
  seoData,
  isHomePage,
  children,
  currentPageSlug,
  isPrimaryPage,
}) => {
  // This is a custom hook to query for menu data.
  // Hooks are a built-in tool of React that let us separate a lot of the business logic out of our components and let them just worry about displaying the template.
  // See https://reactjs.org/docs/hooks-custom.html for more info
  const [{ primaryMenuData, secondaryMenuData }, menuItemsCount] = useMenuData()

  return (
    <div
      className={`body-wrapper ${currentPageSlug} ${
        isPrimaryPage ? 'primary' : 'secondary'
      }`}
    >
      <SEO title={seoData?.title} description={seoData?.metaDesc} />
      <Header
        primaryMenuData={primaryMenuData}
        secondaryMenuData={secondaryMenuData}
        menuItemsCount={menuItemsCount}
        currentPageSlug={currentPageSlug}
      />

      <MainContent home={isHomePage}>{children}</MainContent>

      <Footer />
    </div>
  )
}

export default Layout
