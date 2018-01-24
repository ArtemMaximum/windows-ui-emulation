import React, { Component } from 'react'
import styled from 'styled-components'

import AppsPanel from '../organisms/apps-panel'
import Header from 'ui/organisms/header'

import { receiveProfileData } from '../../profile/actions'
import { receiveAppsList, changeCardColor } from '../../apps/actions'
import { Modal } from '../../../ui/molecules'
import { bindActionCreators } from 'redux'
import { mediaMaxWidth } from 'lib/sizes'
import { connect } from 'react-redux'

import EditProfileContainer from '../../profile/edit-profile-container'

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

class AppsDashboardTemplate extends Component {
  constructor() {
    super();
    
    this.state = {
      isEditing: false
    }
    
    this.editingModalOpen = this.editingModalOpen.bind(this)
    this.editingModalClose = this.editingModalClose.bind(this)
    this.changeCardColorHandler = this.changeCardColorHandler.bind(this)
  }
  
  editingModalOpen = () => {
    this.setState({ isEditing: true })
  }
  
  editingModalClose = () => {
    this.setState({ isEditing: false })
  }
  
  changeCardColorHandler = (id, color) => {
    const { changeCardColor } = this.props
    
    changeCardColor(id, color)
  }
  
  componentDidMount() {
    const { receiveAppsList, receiveProfileData } = this.props
    
    receiveAppsList()
    receiveProfileData()
  }
  
  render() {
    const {
      profile,
      apps: {
        isFetchingApps, appsList
      }
    } = this.props
    
    return (
      <AppsDashboardWrapper>
        <Header profile={profile} editingProfileOpen={this.editingModalOpen}/>
        <Modal
          closeable={true}
          title={'Edit profile'}
          isOpen={this.state.isEditing}
          onClose={this.editingModalClose}>
          <EditProfileContainer modalClose={this.editingModalClose}/>
        </Modal>
        <AppsPanel isFetching={isFetchingApps} apps={appsList} changeCardColor={this.changeCardColorHandler}/>
      </AppsDashboardWrapper>
    )
  }
}

function select(state) {
  return {
    profile: state.profile.data,
    apps: {
      isFetchingApps: state.apps.isFetching,
      appsList: state.apps.list,
      AppsErrorMessage: state.apps.errorMessage,
      AppsTotal: state.apps.total
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receiveAppsList: bindActionCreators(receiveAppsList, dispatch),
    receiveProfileData: bindActionCreators(receiveProfileData, dispatch),
    changeCardColor: bindActionCreators(changeCardColor, dispatch),
  }
}

export default connect(select, mapDispatchToProps)(AppsDashboardTemplate)