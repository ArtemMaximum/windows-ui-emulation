import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'


import { Apps } from '../molecules/index'
import { App } from '../types'
import { keyify } from 'lib/string'
import { AppCard } from '../atoms'
import { changeCardColor } from '../actions'

import { Modal } from '../../../ui/molecules'
import EditCardContainer from '../../apps/edit-app-container'


class AppsPanel extends Component {
  constructor() {
    super()
    
    this.state = {
      currentColorPicker: null,
      isEditing: false,
      editingAppId: null
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.editingModalOpen = this.editingModalOpen.bind(this)
    this.editingModalClose = this.editingModalClose.bind(this)
  }
  
  editingModalOpen = (id) => {
    this.setState({ isEditing: true, editingAppId: id })
  };
  
  editingModalClose = () => {
    this.setState({ isEditing: false })
  };
  
  handleClick = (id) => {
    this.setState({ currentColorPicker: id })
  };
  
  handleClose = () => {
    this.setState({ currentColorPicker: null })
  };
  
  changeColor = (color) => {
    const { dispatch } = this.props
    
    dispatch(changeCardColor(this.state.currentColorPicker, color.hex))
  }
  
  render() {
    const { isFetching, apps } = this.props
    
    return (
      <Apps>
        {!isEmpty(apps) && apps.map((app) =>
          <AppCard
            key={keyify(app.name)}
            app={app}
            currentColorPicker={this.state.currentColorPicker}
            handleClick={this.handleClick}
            handleClose={this.handleClose}
            changeColor={this.changeColor}
            openEditingModal={this.editingModalOpen}
          />
        )}
        <Modal
          closeable={true}
          title={'Edit App'}
          isOpen={this.state.isEditing}
          onClose={this.editingModalClose}>
          <EditCardContainer modalClose={this.editingModalClose} cardId={this.state.editingAppId}/>
        </Modal>
      </Apps>
    )
  }
}

AppsPanel.propTypes = {
  apps: PropTypes.arrayOf(App),
  isFetching: PropTypes.bool
}

AppsPanel.defaultProps = {
  isFetching: true,
  apps: []
}

export default AppsPanel
