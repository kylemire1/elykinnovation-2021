import canUseDom from './canUseDom'

/**
 * Get an array of page slugs from an array of WP menu data
 * @param {array} menuData
 * @returns {array} An array of slugs
 */
export default function getMenuItemSlugs(menuData) {
  if (!canUseDom()) return

  return menuData.map(item => item.url.replaceAll('/', ''))
}
