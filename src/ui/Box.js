import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  Background,
  flexbox,
  grid,
  sizes,
  compose,
  Border
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  sizes,
  Background,
  Border
)

const BoxBase = ({ as: Component = 'div', sx, ...props }) => (
  <Component sx={sx} {...props} />
)

const Box = styled.div(
  {
    boxSizing: 'border-box'
  },
  styleProps,
  ({ sx }) => sx
)

BoxBase.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.grid,
  as: PropTypes.node,
  sx: PropTypes.sx
}

export default Box
