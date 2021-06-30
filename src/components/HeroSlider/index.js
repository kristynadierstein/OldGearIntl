import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import StyleContext from '../../context/StyleProvider'
import HeroSlider, { Slide, ButtonsNav, Nav, OverlayContainer } from 'hero-slider'
import SliderWrapper from './SliderWrapper'

const carHunting = 'https://res.cloudinary.com/kristynadierstein/image/upload/v1625006437/OGLogistics/markus-spiske-4U3Pin0XSPE-unsplash_bmqayr.jpg'
const hvitserkur = 'https://res.cloudinary.com/kristynadierstein/image/upload/v1625008741/OGLogistics/shaah-shahidh--subrrYxv8A-unsplash_ypd042.jpg'


const ZoomSlider = props => {
  const styleContext = useContext(StyleContext)
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
      onChange={nextSlide => styleContext?.setColorWhite(nextSlide)}
      onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
      style={{
        backgroundColor: '#000'
      }}
      settings={{
        slidingDuration: 1000,
        slidingDelay: 1000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        height: '100vh'
      }}
    >
      <OverlayContainer>
              <SliderWrapper>
                <p>Hello</p>
              </SliderWrapper>
            </OverlayContainer>

      <Slide
        background={{
          backgroundImage: carHunting,
        }}
      />

      <Slide
        background={{
          backgroundImage: hvitserkur,
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
