import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Label = styled.label`
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
    reverse: PropTypes.bool
}