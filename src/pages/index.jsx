import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Wrapper, Title } from "../components"
import website from "../../config/website"
import { LocaleContext } from "../components/Layout"
import SEO from "../components/SEO"
import ZoomSlider from "../components/HeroSlider"
import { getQuery } from "../utils/functions/getQuery"
import ContentServicesBlock from "../components/ContentServicesBlock"
import WhyToUseOurServicesBlock from "../components/WhyToUseOurServicesBlock"
import HowCanWeHelp from "../components/HowCanWeHelp"
import GalleryCarousel from "../components/GalleryCarousel"
import NewsletterModule from "../components/NewsletterModule"

const IndexWrapper = Wrapper.withComponent("main")

const Index = ({ pageContext: { locale }, location, data }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const homePageQuery = getQuery(["homepage", "nodes", 0, "data"], data)
  const heroBannerQuery = getQuery(["heroBanner", "nodes", 0, "data"], data)
  const cardsBlock = getQuery(["cardsBlock", "nodes", 0, "data"], data)
  const reviewsCarousel = getQuery(["reviews", "nodes", 0, "data"], data)
  const galeryCarousel = getQuery(["imageCarousel", "nodes", 0, "data"], data)
  const newsletterModule = getQuery(["newsletterModule", "nodes", 0, "data"], data)

  console.log(heroBannerQuery)

  

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      {/* <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>

      </IndexWrapper> */}
      <ZoomSlider query={heroBannerQuery} />
      <ContentServicesBlock data={homePageQuery} />
      <WhyToUseOurServicesBlock data={cardsBlock}/>
      <HowCanWeHelp data={reviewsCarousel}/>
      <GalleryCarousel data={galeryCarousel}/>
      <NewsletterModule data={newsletterModule}/>
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
          content_block_title {
            text
          }
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
    newsletterModule: allPrismicNewsletterModule {
      nodes {
        lang
        data {
          title {
            text
          }
          thank_you_message {
            text
          }
          logo {
            url
          }
          label_input {
            text
          }
          label_button {
            text
          }
        }
      }
    }
    imageCarousel: allPrismicGaleryCarousel {
      nodes {
        lang
        data {
          title {
            text
          }
          subtitle {
            html
          }
          section_container {
            description_i {
              text
            }
            description_ii {
              text
            }
            image_i_horizontal {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 700, quality: 100)
                }
              }
            }
            image_i_primary_vertical {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 700, quality: 100)
                }
              }
            }
            image_i_secondary_vertical {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 700, quality: 100)
                }
              }
            }
            image_ii_horizontal {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 700, quality: 100)
                }
              }
            }
            image_ii_primary_vertical {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 700, quality: 100)
                }
              }
            }
            image_ii_secondary_vertical {
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
    cardsBlock: allPrismic3CardsBlock {
      nodes {
        lang
        data {
          card_content {
            text {
              html
            }
          }
          cta_label {
            text
          }
          title {
            text
          }
        }
      }
    }
    
    reviews: allPrismicReviewsCarousel {
      nodes {
        lang
        data {
          review_content {
            author_name {
              text
            }
            author_role {
              text
            }
            main_review {
              text
            }
          }
          title {
            text
          }
        }
      }
    }
    heroBanner: allPrismicHeroBanner {
      nodes {
        lang
        data {
          hero_cta {
            html
          }
          hero_cta_carhunt {
            html
          }
          hero_cta_carhunt_label {
            text
          }
          hero_cta_logistics_disclaimer {
            text
          }
          hero_cta_logistics_label {
            text
          }
          scroll_down_message {
            text
          }
        }
      }
    }
  }
`
