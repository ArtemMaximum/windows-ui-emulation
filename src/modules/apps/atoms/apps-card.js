import React from 'react'
import styled from 'styled-components'

import { App } from 'ui/types'
import { CirclePicker } from 'react-color'

const CARD_TYPES = {
  big: 248,
  small: 120,
};

const PICKER_COLORS = [
  "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
  "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
  "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b",
  "#2c89ef", "#6bb61d", "#db542d", "#bd1e4a", "#5e3aba",
]

const AppsCardAtom = styled.a`
  display: flex;
  position: relative;
  margin: 0;
  height: 120px;
  margin: 0 8px 8px 0;
  padding: 0 8px 8px 16px;
  cursor: pointer;
  width: ${({ app: { type } }) => CARD_TYPES[type]}px;
  ${({ app: { color } }) => color && `background-color: ${color};`}
  
  &:hover {
    outline: 2px solid lightskyblue;
    
    .switcher {
      opacity: 1;
    }
  }
  
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10!important;
  }
  
  .circle-picker {
    padding: 8px;
    background-color: #ffffff;
    z-index: 15 !important;
    position: relative;
    justify-content: flex-start;
    border-radius: 3px;
    boxShadow: 0 0 0 1px rgba(0,0,0,.5);
    position: relative;
    right: 38px;
    top: 100px;
    
    span > div {
      margin: 7px !important;
      
      span > div {
        margin: 0 !important;
      }
    }
  }
`

const CardName = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 11px;
  font-weight: 400;
  color: #ffffff;
`

const ColorPickerSwitcher = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: center;
  line-height: 15px;
  font-size: 25px;
  font-weight: 400;
  box-shadow: 0 0 5px 3px rgba(0,0,0,0.3);
  opacity: 0;
  transition: all .3s;
`

export const AppCard = ({ app, currentColorPicker, handleClick, handleClose, changeColor }) => (
  <AppsCardAtom app={app}>
    <CardName>{app.name}</CardName>
    <ColorPickerSwitcher className='switcher' onClick={(e) => handleClick(app.id)}> ... </ColorPickerSwitcher>
    {
      currentColorPicker === app.id ?
        <div>
          <div className='overlay' onClick={handleClose}/>
          <CirclePicker
            color={app.color}
            colors={PICKER_COLORS}
            onChange={changeColor}/>
        </div> : null
    }
  </AppsCardAtom>
)

AppCard.propTypes = {
  app: App,
}
