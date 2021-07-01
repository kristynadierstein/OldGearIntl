/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import '@reach/skip-nav/styles.css'


import SkipNavLink from './SkipNavLink'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/index.js'
import { theme, reset } from '../styles'
import i18n from '../../config/i18n'

import 'typeface-lora'
import 'typeface-source-sans-pro'

const globalStyle = css`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`

const LocaleSwitcher = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 10px;
  z-index: 100000000;
`

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('769'))

  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      <ThemeProvider theme={theme}>
        <>
          <Global styles={globalStyle} />
          <SkipNavLink />

          {isDesktop ? (
          <LocaleSwitcher data-name="locale-switcher">
            <Link hrefLang="en-us" to="/">
              EN
            </Link>
            /{' '}
            <Link hrefLang="fr-fr" to="/fr">
              FR
            </Link>
            /{' '}
            <Link hrefLang="de-de" to="/de">
              DE
            </Link>{' '}
          </LocaleSwitcher>
          ) : (<></>)}
          <Navigation />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </LocaleContext.Provider>
  )
}

export { LocaleContext, Layout }


Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired
}
