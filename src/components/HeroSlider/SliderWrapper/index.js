import React from 'react'
import PropTypes from 'prop-types'
import { SliderWrapperStyled } from './style'

const SliderWrapper = (props) => {
  return (
    <SliderWrapperStyled>
      {props.children}
    </SliderWrapperStyled>
  )
}

SliderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element
  ])
}

export default SliderWrapper
