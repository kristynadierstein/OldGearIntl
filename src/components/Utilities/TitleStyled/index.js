import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { TitleStyled } from "./style"
// import TranslateReveal from 'components/AnimationTexts/TranslateReveal';

const Title = (props, ref) => {
  const {
    children,
    uppercase,
    as = "span",
    type,
    style,
    className,
    whiteTitle,
    withTitleDecoration,
    withTitleDecorationWhite,
    dangerouslySetInnerHTML
  } = props

  const textProps = {
    as,
    type,
    uppercase,
    style: style || null,
    className: `${className || ""} Title ${type || ""}`,
    whiteTitle,
    withTitleDecoration,
    withTitleDecorationWhite
  }

  return dangerouslySetInnerHTML ? (
    <TitleStyled {...textProps} ref={ref} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
  ) : (
    <TitleStyled {...textProps}>{children}</TitleStyled>
  )
}

Title.propTypes = {
  children: PropTypes.string,
  as: PropTypes.string,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h5-secondary", "h6", "h1-secondary", "h1-secondary-large"]),
  className: PropTypes.string,
  style: PropTypes.object,
  animationDelay: PropTypes.number
}

export default forwardRef(Title)
