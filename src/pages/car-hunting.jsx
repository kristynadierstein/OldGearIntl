/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { LocaleContext } from "../components/Layout"
import SEO from "../components/SEO"
import { getQuery } from "../utils/functions/getQuery"
import { Wrapper } from "../components"
import PagesHeroContainer from "../components/PagesLayout/HeroContainer"
import Footer from "../components/Footer/index.js"
import { WidthLimiterStyled } from "../components/Utilities/WidthLimiter/style"
import Text from "../components/Utilities/TextStyled"
import Title from "../components/Utilities/TitleStyled"
import CarHuntingHeroContainer from "../components/PagesLayout/CarHuntingPage/index"
import NewsletterModule from "../components/NewsletterModule"
import {
  CarHuntingPage,
  ContactPageContainerMain,
  HeroContactModule,
  HeroContactContent,
  HeroImage,
  CarHuntingBoxes,
  CarHuntingContainerContent,
  CarHuntingServicesContainer,
  Content
} from "../components/PagesLayout/CarHuntingPage/style"
import { MainWrapperShort } from "../components/PagesLayout/HeroContainer/style"

const carHunting = ({ pageContext: { locale }, location, data }) => {
  console.log("data from car-hunting", data)
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const newsletterModule = getQuery(["newsletterModule", "nodes", 0, "data"], data)

  const carHuntingPageQuery = getQuery(["allPrismicCarhuntingPage", "nodes", 0], data)
  console.log("carHuntingPageQuery", carHuntingPageQuery)

  const injectHTML = text => ({ __html: text })

  return (
    <CarHuntingPage>
      <SEO pathname={location.pathname} locale={locale} />
      {/* <PagesHeroContainer data={contactPageQuery} /> */}
      <CarHuntingHeroContainer query={carHuntingPageQuery} />
      <MainWrapperShort>
        <WidthLimiterStyled>
          <CarHuntingContainerContent>
            <Title withTitleDecoration as="h2">
              {carHuntingPageQuery?.data?.page_subtitle?.text}
            </Title>
            <Text
              type="primary"
              as="div"
              className="subtitle-services-page"
              dangerouslySetInnerHTML={injectHTML(carHuntingPageQuery?.data?.content?.text)}
            ></Text>

            <CarHuntingServicesContainer>
              {carHuntingPageQuery?.data?.page_html_content?.length > 0 ? (
                carHuntingPageQuery?.data?.page_html_content.map(service => (
                  <Content>
                    <Title type="h5" as="h5" uppercase className="title-services-page">
                      {service?.title?.text}
                    </Title>
                    <Text
                      type="primary-small"
                      className="content-carhunting-page"
                      as="div"
                      dangerouslySetInnerHTML={injectHTML(service?.text?.html)}
                    >
                      {}
                    </Text>
                  </Content>
                ))
              ) : (
                <></>
              )}
            </CarHuntingServicesContainer>
          </CarHuntingContainerContent>
        </WidthLimiterStyled>
        <NewsletterModule data={newsletterModule} />
        <Footer className="contact-footer" />
      </MainWrapperShort>
    </CarHuntingPage>
  )
}

carHunting.propTypes = {}

export default carHunting

export const query = graphql`
  query CarHuntingQuery($locale: String!) {
    allPrismicCarhuntingPage(filter: { lang: { eq: $locale } }) {
      nodes {
        lang
        data {
          page_title {
            text
            html
          }
          page_subtitle {
            text
          }
          hero_image {
            url
          }
          page_html_content {
            title {
              html
              text
            }
            text {
              html
              text
            }
          }
          gallery_section_title {
            text
          }
          gallery {
            image {
              url
            }
          }
          cta_label {
            text
          }
          cta_content {
            text
          }
          content {
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
