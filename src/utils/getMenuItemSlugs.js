/**
 * Get an array of page slugs from an array of WP menu data
 * @param {array} menuData
 * @returns {array} An array of slugs
 */
export default function getMenuItemSlugs(menuData) {
  if (typeof window === `undefined`) return

  return menuData.map(item => item.url.replaceAll('/', ''))
}
