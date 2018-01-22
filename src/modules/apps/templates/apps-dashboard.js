import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppsPanel from '../organisms/apps-panel'

import Header from 'ui/organisms/header'
import { mediaMaxWidth } from 'lib/sizes'

export const AppsDashboardWrapper = styled.div `
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding-bottom: 56px;
  
  ${mediaMaxWidth('desktop4k')} {
    padding-left: 120px;
    padding-right: 120px;
  }
  
  ${mediaMaxWidth('tablet')} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const AppsDashboardTemplate = ({ backgroundImage }) => (
  <AppsDashboardWrapper>
    <Header/>
    <AppsPanel/>
  </AppsDashboardWrapper>
)

AppsDashboardTemplate.propTypes = {
  backgroundImage: PropTypes.string,
}

AppsDashboardTemplate.defaultProps = {
  backgroundImage: 'http://cs636320.vk.me/v636320667/ef69/ejQ9Ihr-kuc.jpg',
}
