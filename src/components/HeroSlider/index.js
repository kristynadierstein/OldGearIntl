import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import HeroSlider, { Slide, ButtonsNav, Nav, OverlayContainer } from "hero-slider"
import StyleContext from "../../context/StyleProvider"
import SliderWrapper from "./SliderWrapper"
import Text from "../Utilities/TextStyled"
import Title from "../Utilities/TitleStyled"

const carHunting =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625006437/OGLogistics/markus-spiske-4U3Pin0XSPE-unsplash_bmqayr.jpg"
const hvitserkur =
  "https://res.cloudinary.com/kristynadierstein/image/upload/v1625008741/OGLogistics/shaah-shahidh--subrrYxv8A-unsplash_ypd042.jpg"

const ZoomSlider = query => {
  const styleContext = useContext(StyleContext)

  const ctaMessage = {
    logistics: query?.query?.hero_cta?.html,
    carHunt: query?.query?.hero_cta_carhunt?.html
  }

  console.log("query", query)

  const [message, setMessage] = useState("")

  const injectHTML = text => {
    return { __html: text }
  }
  console.log("ctaMessage.logistics ", typeof query?.query?.hero_cta?.html)
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      // onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => setMessage(nextSlide.toString())}
      // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        backgroundAnimation: "zoom",
        slidingDuration: 1000,
        slidingDelay: 3000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <SliderWrapper>
          <Title
            whiteTitle
            uppercase
            as="h1"
            dangerouslySetInnerHTML={
              message === "1"
                ? injectHTML(query?.query?.hero_cta?.html)
                : injectHTML(query?.query?.hero_cta_carhunt?.html)
            }
          ></Title>
        </SliderWrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: hvitserkur
        }}
      />

      <Slide
        background={{
          backgroundImage: carHunting
        }}
      />
      {/* <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      /> */}
      <Nav />
    </HeroSlider>
  )
}

ZoomSlider.propTypes = {}

export default ZoomSlider
