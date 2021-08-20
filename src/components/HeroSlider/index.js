import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import StyleContext from "../../context/StyleProvider";
import SliderWrapper from "./SliderWrapper";
import Text from "../Utilities/TextStyled";
import Title from "../Utilities/TitleStyled";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { ArrowDown } from "../Icons/ArrowDown";
import { ScrollDownContainer } from './style'

const carHunting =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625006437/OGLogistics/markus-spiske-4U3Pin0XSPE-unsplash_bmqayr.jpg";
const hvitserkur =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625008741/OGLogistics/shaah-shahidh--subrrYxv8A-unsplash_ypd042.jpg";

const ZoomSlider = (query) => {
  const styleContext = useContext(StyleContext);

  const ctaMessage = {
    logistics: query?.query?.hero_cta?.html,
    carHunt: query?.query?.hero_cta_carhunt?.html,
  };

  const [message, setMessage] = useState("");

  const injectHTML = (text) => {
    return { __html: text };
  };

  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onChange={(nextSlide) => setMessage(nextSlide.toString())}
      style={{
        backgroundColor: "#000",
      }}
      settings={{
        backgroundAnimation: "zoom",
        slidingDuration: 1000,
        slidingDelay: 3000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        height: "100vh",
      }}
    >
      <OverlayContainer>
        <SliderWrapper>
          <WidthLimiterStyled>
            <Title
              whiteTitle
              uppercase
              as="span"
              type="h1-secondary-large"
              dangerouslySetInnerHTML={
                message === "1"
                  ? injectHTML(query?.query?.hero_cta?.html)
                  : injectHTML(query?.query?.hero_cta_carhunt?.html)
              }
            ></Title>
            <ScrollDownContainer>
              <Text
                whiteText
                type="super-small"
                className="scroll-down-message"
              >
                {query?.query?.scroll_down_message.text}
              </Text>
              <ArrowDown className="arrow-down-hero" />
            </ScrollDownContainer>
          </WidthLimiterStyled>
        </SliderWrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: hvitserkur,
        }}
      />

      <Slide
        background={{
          backgroundImage: carHunting,
        }}
      />
    </HeroSlider>
  );
};

ZoomSlider.propTypes = {};

export default ZoomSlider;
