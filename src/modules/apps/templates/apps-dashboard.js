import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'ui/organisms/header'
import AppsPanel from '../organisms/apps-panel'
import { Modal } from '../../../ui/molecules'

import { receiveAppsList } from '../../apps/actions'
import { receiveProfileData } from '../../profile/actions'
import { connect } from 'react-redux'
import { mediaMaxWidth } from 'lib/sizes'

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
  }
  
  editingModalOpen = () => {
    this.setState({ isEditing: true })
  };
  
  editingModalClose = () => {
    this.setState({ isEditing: false })
  };
  
  componentDidMount() {
    const { dispatch } = this.props
    
    dispatch(receiveAppsList())
    dispatch(receiveProfileData())
  }
  
  render() {
    const {
      profile,
      apps: {
        isFetchingApps, appsList
      },
      dispatch
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
        <AppsPanel isFetching={isFetchingApps} apps={appsList} dispatch={dispatch}/>
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

export default connect(select)(AppsDashboardTemplate)