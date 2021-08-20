/* eslint react/prop-types: 0, react/display-name: 0 */
import React from 'react'
import { LocaleProvider } from './src/context/LocaleProvider'
import { StyleProvider } from './src/context/StyleProvider'
import { Layout } from './src/components/Layout'


const wrapPageElement = ({ element, props }) => (
  <LocaleProvider locale={props.pageContext.locale}>
    <StyleProvider>
      <Layout {...props}>{element}</Layout>
    </StyleProvider>
  </LocaleProvider>
)

export default wrapPageElement
