import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { MainContent } from './styled/global'

import useMenuData from '../utils/hooks/useMenuData'
import getMenuItemSlugs from '../utils/getMenuItemSlugs'

const Layout = ({ isHomePage, children, currentPageSlug }) => {
  const [isPrimary, setIsPrimary] = useState(false)
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

  useEffect(() => {
    const slugs = getMenuItemSlugs(primaryMenuData)
    if (
      (slugs && slugs.includes(currentPageSlug)) ||
      ['home', '404'].includes(currentPageSlug) ||
      !currentPageSlug
    ) {
      setIsPrimary(true)
    } else {
      setIsPrimary(false)
    }
  }, [primaryMenuData, currentPageSlug])

  return (
    <div
      className={`body-wrapper ${currentPageSlug} ${
        isPrimary ? 'primary' : 'secondary'
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
