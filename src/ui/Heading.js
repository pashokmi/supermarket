import styled from 'styled-components'
import {
  space,
  color,
  typography,
  shadow,
  layout,
  variant,
  compose
} from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const headingVariantBase = {
  color: 'text',
  fontWeight: 'bold',
  lineHeight: 'heading'
}

const variants = {
  h1: {
    ...headingVariantBase,
    fontSize: 'extraLarge'
  },
  h2: {
    ...headingVariantBase,
    fontSize: 'larger'
  },
  h3: {
    ...headingVariantBase,
    fontSize: 'large'
  },
  h4: {
    ...headingVariantBase,
    fontSize: 'medium'
  },
  h5: {
    ...headingVariantBase,
    fontSize: 'small'
  },
  h6: {
    ...headingVariantBase,
    fontSize: 'smaller'
  }
}

const HeadingBase = ({ variant, as: Component = variant, sx, ...props }) => (
  <Component variant={variant} sx={sx} {...props} />
)

const StyleHeading = compose(space, color, typography, shadow, layout)

const Heading = styled(HeadingBase)(
  {
    padding: 0,
    margin: 0
  },
  variant({
    variants
  }),
  StyleHeading,
  ({ sx }) => sx
)

HeadingBase.propTypes = {
  ...propTypes.space,
  as: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  sx: PropTypes.object,
  children: PropTypes.node
}

export default Heading
