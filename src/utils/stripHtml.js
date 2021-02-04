/**
 * Strip html tags from a string
 * @param {string} htmlString - The string with HTML to strip
 * @returns {string} The stripped string
 */
export default function stripHtml(htmlString) {
  return htmlString ? htmlString.replace(/(<([^>]+)>)/gi, '') : ''
}

/**
 * Strip anchor tags from a string
 * @param {string} htmlString - The string with anchor tags to strip
 * @returns {string} The stripped string
 */
export function stripAnchorTags(htmlString) {
  return htmlString ? htmlString.replace(/<\/?a[^>]*>/g, '') : ''
}
