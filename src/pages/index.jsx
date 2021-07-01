import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Wrapper, Title } from '../components'
import website from '../../config/website'
import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'
import ZoomSlider from '../components/HeroSlider'
import { getQuery } from "../utils/functions/getQuery"
import ContentServicesBlock from "../components/ContentServicesBlock"


const IndexWrapper = Wrapper.withComponent('main')

const Index = ({ pageContext: { locale }, location, data }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const homePageQuery = getQuery(['homepage', 'nodes', 0, 'data'], data)

  console.log(homePageQuery)

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      {/* <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>

      </IndexWrapper> */}
      <ZoomSlider />
      <ContentServicesBlock data={homePageQuery} />
    </>
  )
}

export default Index

Index.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
}


export const homepageQuery = graphql`
query HomePageQuery($locale: String!) {
  homepage: allPrismicHomepageServices(filter: { lang: { eq: $locale } }) {
    nodes {
      lang
      data {
        content_block {
          link_label {
            text
          }
          text {
            html
          }
          title {
            text
          }
          block_image {
            url
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100)
              }
            }
          }
        }
      }
    }
  }
}
`
