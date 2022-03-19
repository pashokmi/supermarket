import styled from 'styled-components'
import {
  color,
  space,
  typography,
  shadow,
  layout,
  compose,
  variant
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

const styleText = compose(color, space, typography, layout, shadow)

const variants = {
  body: {
    fontSize: 1,
    color: 'accent'
  }
}

const TextBase = ({ as: Component = 'p', sx, ...props }) => (
  <Component sx={sx} {...props} />
)

const Text = styled(TextBase)(
  {
    padding: 0,
    margin: 0
  },
  styleText,
  variant({ variants }),
  ({ sx }) => sx
)

TextBase.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.shadow,
  ...propTypes.layout,
  as: PropTypes.node,
  sx: PropTypes.object
}

Text.defaultProps = {
  fontSize: 'medium'
}

export default Text
