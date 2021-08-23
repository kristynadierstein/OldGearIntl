import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  GalleryCarouselContainerStyled,
  ImageHorizontalContainer,
  ImageVerticalContainer,
  PhotoContainer,
  PhotoContainerSecond,
  SliderContainer,
  SecondaryRowSlider,
} from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { TextStyled } from "../Utilities/TextStyled/style";
import { TitleStyled } from "../Utilities/TitleStyled/style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryCarousel = (data) => {
  console.log("data from carousel", data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const injectHTML = (text) => {
    return { __html: text };
  };

  return (
    <GalleryCarouselContainerStyled>
      <WidthLimiterStyled>
        <TitleStyled withTitleDecoration as="h2">
          {data?.data?.title?.text}
        </TitleStyled>
        <TextStyled
          type="primary"
          className="subtitle-carousel"
          dangerouslySetInnerHTML={injectHTML(data?.data?.subtitle?.html)}
        ></TextStyled>
        <Slider {...settings}>
          {data?.data?.section_container?.map((photo, index) => (
            <SliderContainer>
              <PhotoContainer>
                <ImageHorizontalContainer>
                  <img src={photo?.image_i_horizontal?.url} alt="" />
                  <TextStyled
                    type="super-small"
                    className="car-description-carousel"
                  >
                    {photo?.description_i?.text}
                  </TextStyled>
                </ImageHorizontalContainer>
                <SecondaryRowSlider>
                  <ImageVerticalContainer>
                    <img src={photo?.image_i_primary_vertical?.url} alt="" />
                  </ImageVerticalContainer>
                  <ImageVerticalContainer>
                    <img src={photo?.image_i_secondary_vertical?.url} alt="" />
                  </ImageVerticalContainer>
                </SecondaryRowSlider>
              </PhotoContainer>

              <PhotoContainerSecond>
                <ImageHorizontalContainer>
                  <img src={photo?.image_ii_horizontal?.url} alt="" />
                  <TextStyled
                    type="super-small"
                    className="car-description-carousel"
                  >
                    {photo?.description_ii?.text}
                  </TextStyled>
                </ImageHorizontalContainer>
                <SecondaryRowSlider>
                  <ImageVerticalContainer>
                    <img src={photo?.image_ii_primary_vertical?.url} alt="" />
                  </ImageVerticalContainer>
                  <ImageVerticalContainer>
                    <img src={photo?.image_ii_secondary_vertical?.url} alt="" />
                  </ImageVerticalContainer>
                </SecondaryRowSlider>
              </PhotoContainerSecond>
            </SliderContainer>
          ))}
        </Slider>
      </WidthLimiterStyled>
    </GalleryCarouselContainerStyled>
  );
};

GalleryCarousel.propTypes = {};

export default GalleryCarousel;
