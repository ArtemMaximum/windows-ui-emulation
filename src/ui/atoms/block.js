import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeOr, ifProp } from 'lib/theme'

export const Block = styled.div`
  font-family: ${themeOr('font', 'primary')};
`

Block.propTypes = {
    palette: PropTypes.string,
    reverse: PropTypes.bool
}

Block.defaultProps = {
    palette: 'grayscale'
}
