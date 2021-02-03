/**
 * Strip html tags from a string
 * @param {string} htmlString - The string with HTML to strip
 * @returns {string} The stripped string
 */
export default function stripHtml(htmlString) {
  return htmlString.replace(/(<([^>]+)>)/gi, '')
}
