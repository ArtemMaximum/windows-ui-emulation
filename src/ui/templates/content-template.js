import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { width, mediaMaxWidth } from 'lib/sizes'


const ContentTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${width.laptop}px;
  padding-top: 20px;
  z-index: 1;
`

// eslint-disable-next-line react/prop-types
const ContentConstructor = ({ className, children }) => (
  <div className={className}>
    <ContentTemplateContainer>
      {children}
    </ContentTemplateContainer>
  </div>
)

export const ContentTemplate = styled(ContentConstructor)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaMaxWidth('desktop')} {
    padding: 0 20px;
  }
`

ContentTemplate.propTypes = {
  children: PropTypes.node.isRequired
}