import { css } from 'styled-components'


export const width = {
  mobileS: 320,
  mobileM: 375,
  mobile: 414,
  mobileL: 450,
  tabletS: 570,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  desktop4k: 2560,
}

export const height = {
  mobilePortrait: 360,
  mobileLandscape: 460,
}

export const mediaCss = Object.keys(width).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${width[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

/**
 * @param {string|number} type tablet | desktop
 * @return {string} css @media (max-width: ${WT}px)
 */
export const mediaMaxWidth = (type, cb = b => b) =>
  `@media (max-width: ${cb(width[type] || type)}px)`

/**
 * @param {string|number} type tablet | desktop
 * @param cb
 * @return {string} css @media (max-width: ${WT}px)
 */
export const mediaMinWidth = (type, cb = b => b) =>
  `@media (min-width: ${cb(width[type] || type)}px)`

/**
 *
 * @param {string|number} from
 * @param {string|number} to
 */
export const mediaWidthBetween = (from, to) =>
  `@media (min-width: ${width[from] || from}px and max-width: ${width[to] || to}px`

/**
 * @param {string|number} type
 * @return {string} css @media (max-height: ${HT}px)
 */
export const mediaMaxHeight = (type, cb = b => b) =>
  `@media (max-height: ${cb(height[type] || type)}px)`

/**
 *
 * @param {string|number} from
 * @param {string|number} to
 */
export const mediaHeightBetween = (from, to) =>
  `@media (min-height: ${height[from] || from}px and max-height: ${height[to] || to}px`
