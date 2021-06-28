/* eslint react/prop-types: 0, react/display-name: 0 */
import React from "react"
import { LocaleProvider } from './src/context/LocaleProvider'

import { Layout } from './src/components/Layout'

const wrapPageElement = ({ element, props }) => (
  <LocaleProvider locale={props.pageContext.locale}>
    <Layout {...props}>{element}</Layout>
  </LocaleProvider>
)

export default wrapPageElement
