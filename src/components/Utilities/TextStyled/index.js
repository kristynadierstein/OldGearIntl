import React from 'react'
import PropTypes from 'prop-types'
import { TextStyled } from './style.js'

const Text = (props, ref) => {
  const {
    children,
    uppercase, 
    className,
    style,
    type = 'body',
    as = 'p',
    dangerouslySetInnerHTML,
    clickHandler,
    whiteText,
  } = props

  const textProps = {
    as,
    style: style ? style : null,
    className: `${className ? className : ''} Text ${type ? type : ''}`,
    type,
    onClick: clickHandler ? clickHandler : null,
    whiteText,
    uppercase
  }

  return dangerouslySetInnerHTML ? (
    <TextStyled
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...textProps}
    />
  ) : (
    <TextStyled {...textProps}>{children}</TextStyled>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'primary',
    'primary-small',
    'secondary',
    'secondary-small',
    'tertiary',
    'tertiary-small',
    'super-small',
    'super-big',
  ]),
  as: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.any,
  children: PropTypes.any,
  clickHandler: PropTypes.func,
}

export default Text
