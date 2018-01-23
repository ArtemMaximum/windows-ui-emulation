import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeOr, ifProp } from 'lib/theme'

export const fontSize = ({ height }) => `${height / 35.5555555556}rem`

const styles = css`
  font-family: Helvetica Neue,Helvetica,Roboto,sans-serif;
  font-weight: 300;
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  border-radius: 2px;
  border: 0;
  border-bottom: 2px solid #aad8f3;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

export const Input = ({ ...props, type }) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  } else if (type === 'select') {
    return <StyledSelect {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  height: 40
}
