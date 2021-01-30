/**
 * Case-insensitive string replaceAll
 * @param {string} initialStr - The initial string
 * @param {string} strReplace - The substring to replace
 * @param {string} strWith - What to replace the substring with
 * @returns {string} The new string
 */
export default function (initialStr, strReplace, strWith) {
  // See http://stackoverflow.com/a/3561711/556609
  var esc = strReplace.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
  var reg = new RegExp(esc, 'ig')
  return initialStr.replace(reg, strWith)
}
