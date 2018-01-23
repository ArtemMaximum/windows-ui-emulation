import React from 'react'
import styled from 'styled-components'

const themes = {
  danger: '#db4437',
  success: '#0fdcaa',
  info: '#6565d6',
  warning: '#ccbe17'
}
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ButtonAtom = styled.button`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  font-weight: 300;
  border-radius: 3px;
  background-color: ${props => props.theme ? themes[props.theme] : themes['info']};
  cursor: pointer;
  transition: all .3s;
  border: none;
`

export const Button = ({ theme, children, onClick, type }) => (
  <ButtonWrapper>
    <ButtonAtom theme={theme} onClick={onClick} type={type}>{children}</ButtonAtom>
  </ButtonWrapper>
)
