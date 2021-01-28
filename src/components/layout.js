import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { MainContent } from './styled/global'

import useMenuData from '../utils/hooks/useMenuData'
import getMenuItemSlugs from '../utils/getMenuItemSlugs'
import canUseDom from '../utils/canUseDom'

const Layout = ({ isHomePage, children, currentPageSlug }) => {
  // This is a custom hook to query for menu data.
  // Hooks are a built-in tool of React that let us separate a lot of the business logic out of our components and let them just worry about displaying the template.
  // See https://reactjs.org/docs/hooks-custom.html for more info
  const [{ primaryMenuData, secondaryMenuData }, menuItemsCount] = useMenuData()
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

  let isPrimaryPage = true
  if (canUseDom && primaryMenuData.length > 0) {
    isPrimaryPage =
      getMenuItemSlugs(primaryMenuData).includes(currentPageSlug) ||
      currentPageSlug === 'home'
  }

  return (
    <div
      className={`body-wrapper ${currentPageSlug} ${
        isPrimaryPage ? 'primary' : 'secondary'
      }`}
    >
      <SEO title={title} />
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
