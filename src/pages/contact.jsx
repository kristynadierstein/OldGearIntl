import React, { useContext } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { LocaleContext } from "../components/Layout"
import SEO from "../components/SEO"
import { getQuery } from "../utils/functions/getQuery"
import { Wrapper } from "../components"
import PagesHeroContainer from "../components/PagesLayout/HeroContainer"
import Footer from "../components/Footer/index.js"
import {
  ContactPage,
  ContactPageContainerMain,
  HeroContactContent,
  HeroImage,
  HeroContactModule
} from "../components/PagesLayout/ContactPage/style"
import Text from "../components/Utilities/TextStyled"
import Title from "../components/Utilities/TitleStyled"
import { WidthLimiterStyled } from "../components/Utilities/WidthLimiter/style"
// import { MainWrapperShort } from "./../components/PagesLayout/HeroContainer/style";

const contact = ({ pageContext: { locale }, location, data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lang = useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const contactPageQuery = getQuery(["allPrismicContactPa", "nodes", 0], data)

  const injectHTML = text => ({ __html: text })

  return (
    <ContactPage>
      <SEO pathname={location.pathname} locale={locale} />
      {/* <PagesHeroContainer data={contactPageQuery} /> */}
      {/* <MainWrapperShort> */}
      <ContactPageContainerMain>
        <WidthLimiterStyled>
          <HeroContactModule>
            <HeroContactContent>
              <Title as="h1" withTitleDecoration>
                {contactPageQuery?.data?.about_us_title?.text}
              </Title>
              <Text
                type="primary-small"
                as="div"
                dangerouslySetInnerHTML={injectHTML(contactPageQuery?.data?.about_us_content?.html)}
              >
                {}
              </Text>
            </HeroContactContent>
            <HeroImage>
              <img src={contactPageQuery?.data?.hero_image?.url} alt="" />
            </HeroImage>
          </HeroContactModule>
        </WidthLimiterStyled>
      </ContactPageContainerMain>
      <Footer className="contact-footer" />

      {/* </MainWrapperShort> */}
    </ContactPage>
  )
}

contact.propTypes = {}

export default contact

export const contactQuery = graphql`
  query ContactQuery($locale: String!) {
    allPrismicContactPa(filter: { lang: { eq: $locale } }) {
      nodes {
        lang
        data {
          about_us_content {
            html
            text
          }
          page_title {
            text
          }
          hero_image {
            url
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100)
              }
            }
          }
          about_us_title {
            text
          }
        }
      }
    }
  }
`
