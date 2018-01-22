import React, { Component } from 'react'
import { keyify } from 'lib/string'
import { Apps } from '../molecules/index'

// import PropTypes from 'prop-types'
import scheme from 'scheme'

// import { connect } from 'react-redux'
// import { receiveExamplesList } from '../examples/actions'
import { App } from '../atoms'


class AppsPanel extends Component {
  constructor(props) {
    super()
    
    this.state = {
      currentColorPicker: null
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  
  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch(receiveExamplesList())
  }
  
  handleClick = (id) => {
    this.setState({ currentColorPicker: id })
  };
  
  handleClose = () => {
    this.setState({ currentColorPicker: null })
  };
  
  
  render() {
    // const { examples } = this.props
    
    return (
      <Apps>
        {scheme.apps.map((app) =>
          <App
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

AppsPanel.propTypes = {}

export default AppsPanel
