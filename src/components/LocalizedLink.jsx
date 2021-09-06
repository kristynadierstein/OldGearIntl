import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleContext } from './Layout'
import locales from '../../config/i18n'

const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext)
  console.log('locale', locales[locale].default)
  const isIndex = to === '/'
  const path = locales[locale].default ? to : `${locales[locale].path}${isIndex ? '' : `${to}`}`
  console.log('path', path)

  return <Link {...props} to={path} />
}

export default LocalizedLink

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
}
