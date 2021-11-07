import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"
import StyleContext from "../../context/StyleProvider"
import SliderWrapper from "./SliderWrapper"
import Text from "../Utilities/TextStyled"
import Title from "../Utilities/TitleStyled"
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style"
import { ArrowDown } from "../Icons/ArrowDown"
import { ScrollDownContainer, SliderWrapperContainer } from "./style"

const carHunting =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625006437/OGLogistics/markus-spiske-4U3Pin0XSPE-unsplash_bmqayr.jpg"
const hvitserkur =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625008741/OGLogistics/shaah-shahidh--subrrYxv8A-unsplash_ypd042.jpg"

const ZoomSlider = query => {
  const injectHTML = text => ({ __html: text })

  return (
    <SliderWrapperContainer>
      {/* <OverlayContainer>
      <ScrollDownContainer>
            <Text
              type="super-small"
              className="scroll-down-message"
            >
              {query?.query?.scroll_down_message.text}
            </Text>
            <ArrowDown className="arrow-down-hero" />
          </ScrollDownContainer>
      <SliderWrapper>
        {/* <WidthLimiterStyled> */}
      {/* <Title
            uppercase
            as="span"
            className="hero-title"
            type="h1-secondary-large"
            dangerouslySetInnerHTML={
              message === "1"
                ? injectHTML(query?.query?.hero_cta?.html)
                : injectHTML(query?.query?.hero_cta_carhunt?.html)
            }
          ></Title> */}
      <Title
        uppercase
        as="span"
        className="hero-title"
        type="h1-secondary-large"
        dangerouslySetInnerHTML={injectHTML(query?.query?.hero_cta?.html)}
      ></Title>
      {/* </WidthLimiterStyled> */}
      {/* </SliderWrapper> */}
      {/* </OverlayContainer> */}
      {/* <HeroSlider
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
          height: "70vh",
        }}
      > */}

      {/* <Slide
          background={{
            backgroundImage: hvitserkur,
          }}
        />

        <Slide
          background={{
            backgroundImage: carHunting,
          }}
        />
      </HeroSlider> */}
    </SliderWrapperContainer>
  )
}

ZoomSlider.propTypes = {}

export default ZoomSlider
