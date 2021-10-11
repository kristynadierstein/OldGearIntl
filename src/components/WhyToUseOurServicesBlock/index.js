import React from "react";
import PropTypes from "prop-types";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { WhyToUseOurServicesBlockStyled, CardShadowStyled, CardHolder } from "./style";
import Text from "../Utilities/TextStyled";
import LocalizedLink from "../LocalizedLink"
import { TitleStyled } from "../Utilities/TitleStyled/style";

const WhyToUseOurServicesBlock = (data) => {

  const injectHTML = (text) => {
    return { __html: text };
  };


  return (
    <WhyToUseOurServicesBlockStyled>
      <WidthLimiterStyled>
          <TitleStyled withTitleDecoration as='h2'>
              {data?.data?.title?.text}
          </TitleStyled>
          <CardHolder>
        {data?.data?.card_content.map((card, index) => {
          return (
            <CardShadowStyled>
              <Text uppercase type='tertiary' as='span' dangerouslySetInnerHTML={injectHTML(card?.text?.html)}></Text>
            </CardShadowStyled>
          )
        })}
        </CardHolder>
        <LocalizedLink to="/">{data?.data?.cta_label?.text}</LocalizedLink>
      </WidthLimiterStyled>
    </WhyToUseOurServicesBlockStyled>
  );
};

WhyToUseOurServicesBlock.propTypes = {};

export default WhyToUseOurServicesBlock;
