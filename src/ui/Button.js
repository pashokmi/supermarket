import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  space,
  typography,
  border,
  size,
  variant,
  compose
} from 'styled-system'

const styleButtons = compose(color, space, typography, border, size)

const StyledButton = styled('button')(
  styleButtons,
  variant({
    variants: {
      primary: {
        borderWidth: '1px',
        BorderStyle: 'solid',
        borderColor: 'primary',
        backgroundColor: 'primary',
        color: 'text',
        letterSpacing: 1,
        py: 2,
        px: 3,
        fontSize: 3,
        ':hover': {
          opacity: 0.8
        },
        ':focus': {
          backgroundColor: 'dark'
        }
      }
    }
  }),
  ({ sx }) => sx
)

const Button = ({
  onClick = (f) => f,
  variant = '',
  sx = {},
  children = <></>,
  ...props
}) => {
  return (
    <StyledButton variant={variant} sx={sx} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  sx: PropTypes.object
}

export default Button
