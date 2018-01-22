import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'


import { Apps } from '../molecules/index'
import { App } from '../../../ui/types'
import { keyify } from 'lib/string'
import { AppCard } from '../atoms'




class AppsPanel extends Component {
  constructor() {
    super()
    
    this.state = {
      currentColorPicker: null
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  
  handleClick = (id) => {
    console.log(id);
    this.setState({ currentColorPicker: id })
  };
  
  handleClose = () => {
    this.setState({ currentColorPicker: null })
  };
  
  
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
          />
        )}
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
