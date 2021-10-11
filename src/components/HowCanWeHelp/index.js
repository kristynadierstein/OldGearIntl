import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { TextStyled } from "../Utilities/TextStyled/style";
import { HowCanWeHelpContainerStyled, ReviewContainer } from "./style";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TitleStyled } from "../Utilities/TitleStyled/style";

const HowCanWeHelp = (data) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <HowCanWeHelpContainerStyled>
      <WidthLimiterStyled>
        <TitleStyled whiteTitle withTitleDecorationWhite as="h2">
          {data?.data?.data?.title?.text}
        </TitleStyled>
        <Slider {...settings}>
          {data?.data?.data?.review_content?.map((review, index) => {
              return (
                <ReviewContainer>
                  <TextStyled type="primary" whiteText>
                    {review?.main_review?.text}
                  </TextStyled>
                  <TextStyled
                    type="super-small"
                    className="review-author"
                    whiteText
                  >
                    {review?.author_name?.text}, {review?.author_role?.text}
                  </TextStyled>
                </ReviewContainer>
              );
            })}
        </Slider>
      </WidthLimiterStyled>
    </HowCanWeHelpContainerStyled>
  );
};

HowCanWeHelp.propTypes = {};

export default HowCanWeHelp;
