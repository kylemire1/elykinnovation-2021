/**
 * Checks whether or not the window object is available to prevent errors during the Gatsby build process
 */
export default function canUseDom() {
  return typeof window === `undefined`
}
