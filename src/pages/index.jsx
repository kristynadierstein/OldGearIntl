import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Wrapper, Title } from '../components'
import website from '../../config/website'
import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const IndexWrapper = Wrapper.withComponent('main')

const Index = ({ pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      </IndexWrapper>
    </>
  )
}

export default Index

Index.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}
