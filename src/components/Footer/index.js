import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LocaleContext from "../../context/LocaleProvider";
import {
  StyledFooterContainer,
  AddressContainer,
  ContactContainer,
  SocialMediaContainer,
} from "./style";
import Text from "../Utilities/TextStyled";
import Title from "../Utilities/TitleStyled";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { Facebook } from "../Icons/Social/facebook";
import { Instagram } from "../Icons/Social/instagram";
import { LinkedIn } from "../Icons/Social/linkedin";
import { Youtube } from "../Icons/Social/youtube";
import LocalizedLink from "../LocalizedLink";

const Footer = (props) => {
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
  `);

  const lang = useContext(LocaleContext);
  const i18n = lang.i18n[lang.locale];
  const footer = data.footer.nodes
    .filter((node) => node.lang === i18n.locale)
    .map((r) => r.data);
  const today = new Date();
  const year = today.getFullYear();
  console.log("footer", footer);
  return (
    <StyledFooterContainer>
      <WidthLimiterStyled>
        <Title as="h2" whiteTitle withTitleDecorationWhite>
          {footer?.[0].heading?.text}
        </Title>
        <AddressContainer>
          <Text type="primary-small" whiteText>
            {footer?.[0].company_name.text}
          </Text>
          <Text type="primary-small" whiteText>
            {footer?.[0].company_address.text}
          </Text>
          <ContactContainer>
            <Text type="primary-small" whiteText>
              {footer?.[0].tel_label.text}
            </Text>{" "}
            <Text type="primary-small" whiteText>
              <a
                href={`tel:+1${footer?.[0].tel_num?.text}`}
              >{`+1${footer?.[0].tel_num?.text}`}</a>
            </Text>
          </ContactContainer>
          <ContactContainer>
            <Text type="primary-small" whiteText>
              {footer?.[0].email_label.text}
            </Text>
            <Text type="primary-small" whiteText>
              <a
                href={`email:${footer?.[0].email_address?.text}`}
              >{`${footer?.[0].email_address?.text}`}</a>
            </Text>
          </ContactContainer>
          <SocialMediaContainer>
            <LocalizedLink to={footer?.[0].social_media_i?.url} target="_blank">
              <Facebook />
            </LocalizedLink>
            <LocalizedLink
              to={footer?.[0].social_media_ii?.url}
              target="_blank"
            >
              <Instagram />
            </LocalizedLink>
            <LocalizedLink
              to={footer?.[0].social_media_iii?.url}
              target="_blank"
            >
              <LinkedIn />
            </LocalizedLink>
            <LocalizedLink
              to={footer?.[0].social_media_iv?.url}
              target="_blank"
            >
              <Youtube />
            </LocalizedLink>
          </SocialMediaContainer>
          <Text
            className="copyright-text"
            whiteText
            type="super-small"
          >{`© ${year} ${footer[0].main_copyright_text.text}`}</Text>
        </AddressContainer>
      </WidthLimiterStyled>
    </StyledFooterContainer>
  );
};

Footer.propTypes = {};

export default Footer;
