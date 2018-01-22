import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'


import { Apps } from '../molecules/index'
import { App } from '../../../ui/types'
import { keyify } from 'lib/string'
import { AppCard } from '../atoms'
import { changeCardColor } from '../actions'


class AppsPanel extends Component {
  constructor() {
    super()
    
    this.state = {
      currentColorPicker: null
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }
  
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
