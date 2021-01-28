import { graphql, useStaticQuery } from 'gatsby'
/**
 * Use to access menu data
 * @returns {array} [menuData, menuItemsCount]
 */
const useMenuData = () => {
  const queryResult = useStaticQuery(graphql`
    query MenuData {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              label
              url
            }
          }
          slug
        }
      }
    }
  `)

  const primaryMenuData = queryResult?.allWpMenu?.nodes.filter(
    menu => menu.slug === 'primary-menu'
  )[0]?.menuItems?.nodes
  const secondaryMenuData = queryResult?.allWpMenu?.nodes.filter(
    menu => menu.slug === 'secondary-menu'
  )[0]?.menuItems?.nodes

  const menuItemsCount =
    (primaryMenuData.length || 0) + (secondaryMenuData.length || 0)

  return [{ primaryMenuData, secondaryMenuData }, menuItemsCount]
}

export default useMenuData
