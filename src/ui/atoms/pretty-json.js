import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Json = styled.pre`
  font-weight: 100;
  font-style: normal;
  color: #cc0000;
  background: #ced8d4;
  overflow: auto;
  border-radius: 10px;
  padding: 20px;
  max-height: 700px;
`

export const PrettyJson = ({ data }) => (
  <Json>
    {JSON.stringify(data, 0, 2)}
  </Json>
)

PrettyJson.propTypes = {
  data: PropTypes.objectOf(Json).isRequired || PropTypes.arrayOf(Json).isRequired,
}
