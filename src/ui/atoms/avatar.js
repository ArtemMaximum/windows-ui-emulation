import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { mediaMaxWidth } from 'lib/sizes'


const size = (max, min) => `
  max-width: ${max}px;
  max-height: ${max}px;
  min-width: ${min}px;
  min-height: ${min}px;
`

const SIZE = {
  avatarMinimumLandscape: 180,
  avatarPortraitMaximum: 512,
  avatarPortraitMinimum: 256,
}

const AvatarAtom = styled.figure`
  display: block;
  margin: 0;
  padding: 0;

  img {
    display: block;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
  }
  
  ${mediaMaxWidth('tablet')} and (orientation: portrait) {
    img {
      ${size(SIZE.avatarPortraitMaximum, SIZE.avatarPortraitMinimum)}
      border-radius: 10px;
    }
    
  }

  ${mediaMaxWidth('tabletS')} and (orientation: landscape) {
    img { ${size(SIZE.avatarMinimumLandscape, SIZE.avatarMinimumLandscape)} }
  }
`

export const Avatar = ({ src, title }) => (
  <AvatarAtom>
    <img src={src} alt={title}/>
  </AvatarAtom>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
