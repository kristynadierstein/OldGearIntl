import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import LocaleContext from '../../context/LocaleProvider'
import { StyledFooterContainer } from './style'

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      footer: allPrismicFooter {
        nodes {
          lang
          data {
            company_address {
              text
            }
            company_name {
              text
            }
            email_address {
              text
            }
            email_label {
              text
            }
            heading {
              text
            }
            main_copyright_text {
              text
            }
            social_media_i {
              url
            }
            social_media_ii {
              url
            }
            social_media_iii {
              url
            }
            social_media_iv {
              url
            }
            tel_label {
              text
            }
            tel_num {
              text
            }
          }
        }
      }
    }
  `)

  const lang = useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]
  const footer = data.footer.nodes.filter(node => node.lang === i18n.locale).map(r => r.data)
  console.log('footer', footer)
  return (<StyledFooterContainer>

  </StyledFooterContainer>
  )
}

Footer.propTypes = {}

export default Footer
