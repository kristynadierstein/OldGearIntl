import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { TitleStyled } from './style'
// import TranslateReveal from 'components/AnimationTexts/TranslateReveal';

const Title = (props, ref) => {
  const {
    children,
    uppercase,
    animated,
    animationDelay,
    as = 'span',
    type,
    style,
    className,
    whiteTitle,
  } = props

  const textProps = {
    as,
    type,
    animated,
    uppercase,
    animationDelay,
    children,
    style: style ? style : null,
    className: `${className ? className : ''} Title ${type ? type : ''}`,
    whiteTitle,
  }

  return (
    <TitleStyled {...textProps} ref={ref}>
         {animated ? (
        // <TranslateReveal
        //   animated={animated}
        //   wordRef={ref}
        //   animationDelay={animationDelay}
        //   className='content__item content__item--home content__item--current'
        // >
          <span className='content__paragraph' data-splitting=''>
            {children}
          </span>
        // </TranslateReveal>
      ) :
      children }
    </TitleStyled>
  )
}

Title.propTypes = {
  animated: false,
  children: PropTypes.string,
  as: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h5-secondary','h6', 'h1-secondary', 'h1-secondary-large']),
  className: PropTypes.string,
  style: PropTypes.object,
  animationDelay: PropTypes.number,
}

export default forwardRef(Title)
