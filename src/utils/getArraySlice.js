/**
 * Get a slice of an array without mutating it
 * @param {array} array
 * @param {number} startIndex
 * @param {number} endIndex
 * @returns {array} The sliced segment of the array
 */
export default function getArraySlice(array, startIndex, endIndex) {
  const tempArray = array
  return tempArray.slice(startIndex, endIndex)
}
