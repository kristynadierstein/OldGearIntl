import React from "react"
import PropTypes from "prop-types"
import { LocaleContext } from "../components/Layout"
// import '~video-react/dist/video-react.css';
import { Player } from "video-react"
import { graphql } from "gatsby"
import { Wrapper, Title } from "../components"
import SEO from "../components/SEO"
import Footer from "../components/Footer/index.js"
import { getQuery } from "../utils/functions/getQuery"
import NewsletterModule from "../components/NewsletterModule"
import HowCanWeHelp from "../components/HowCanWeHelp"
import PagesHeroContainer from "../components/PagesLayout/HeroContainer"
import OurServicesDetailsStyled from "./../components/OurServicesDetailsStyled"
import { MainWrapperShort } from "./../components/PagesLayout/HeroContainer/style"
import ContactFormServices from "./../components/ContactFormServices"

const services = ({ pageContext: { locale }, location, data }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const newsletterModule = getQuery(["newsletterModule", "nodes", 0, "data"], data)
  const reviewsCarousel = getQuery(["reviews", "nodes", 0], data)
  const servicePageQuery = getQuery(["servicePage", "nodes", 0, "data"], data)

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <PagesHeroContainer data={servicePageQuery} />
      <MainWrapperShort>
        <OurServicesDetailsStyled data={servicePageQuery} />
        <ContactFormServices data={servicePageQuery} />
        <HowCanWeHelp data={reviewsCarousel} />
        <NewsletterModule data={newsletterModule} />
        <Footer />
      </MainWrapperShort>
    </>
  )
}

services.propTypes = {}

export default services

export const serviceseQuery = graphql`
  query Servicesuery($locale: String!) {
    servicePage: allPrismicServicesPage(filter: { lang: { eq: $locale } }) {
      nodes {
        lang
        data {
          drives
          form_brand_placeholder {
            text
          }
          form_contact_email_placeholder {
            text
          }
          form_destination_placeholder {
            text
          }
          form_label_brand {
            text
          }
          form_label_contact_email {
            text
          }
          form_label_destination {
            text
          }
          form_label_message {
            text
          }
          form_label_model {
            text
          }
          form_label_name {
            text
          }
          form_label_year {
            text
          }
          form_title {
            text
          }
          form_subtitle {
            text
          }
          form_message_placeholder {
            text
          }
          form_model_placeholder {
            text
          }
          form_name_placeholder {
            text
          }
          form_submit_button_label {
            text
          }
          form_year_placeholder {
            text
          }
          section_heading_export {
            text
          }
          section_subheading_export {
            text
            html
          }
          form_thank_you {
            text
          }
          services_list {
            services_description {
              text
              html
            }
            services_title {
              text
              html
            }
          }
          subtitle {
            text
          }
          title {
            html
          }
        }
      }
    }
    reviews: allPrismicReviewsCarousel(filter: { uid: { eq: "services" } }) {
      nodes {
        lang
        uid
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
    newsletterModule: allPrismicNewsletterModule(filter: { lang: { eq: $locale } }) {
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
  }
`
