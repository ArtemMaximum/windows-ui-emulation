import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import scheme from 'scheme'


const BackgroundImage = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center center;
  
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const RootWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const RootTemplate = ({ children, backgroundImage }) => (
  <RootWrapper>
    <BackgroundImage style={{ backgroundImage: `url(${scheme.ui.backgroundImage})` }} />
    {children}
  </RootWrapper>
)

RootTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

RootTemplate.defaultProps = {
  backgroundImage: scheme.ui.backgroundImage,
}

