import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { width } from 'lib/sizes'

const AppsMolecule = styled.section`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: flex-start;
  
  max-width: ${width.laptop}px;
  align-self: center;
`

export const AppsBlock = ({ children }) => (
  <AppsMolecule>
    { children }
  </AppsMolecule>
)

AppsBlock.propTypes = {
  children: PropTypes.node.isRequired
}
