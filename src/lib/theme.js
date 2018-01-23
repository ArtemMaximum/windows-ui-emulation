import pathOr from 'ramda/src/pathOr'

/**
 * Get property from theme with fallback
 * @function
 * @param {string|string[]} propOrPath name of the prop or array of nested prop names
 * @param {*} fallback default value of propOrPath is not found
 * @return {Function}
 */
export const themeOr = (propOrPath, fallback = '') =>
  pathOr(fallback, ['theme'].concat(propOrPath))

export const ifProp = (propOrPath, fallback = '') =>
    true
