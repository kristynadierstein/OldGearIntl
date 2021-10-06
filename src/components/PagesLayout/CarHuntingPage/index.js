import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import { PagesHeroContainerStyled, HeroContentContainer, HeroContent, Container } from "../HeroContainer/style"
import { ImageryCarHuntingContainer, CarHuntContainer } from "./style"
import { ScrollDownContainer } from "../../HeroSlider/style"
import SliderWrapper from "../../HeroSlider/SliderWrapper"
import { ArrowDown } from "../../Icons/ArrowDown"
import Text from "../../Utilities/TextStyled"
import Title from "../../Utilities/TitleStyled"
import { WidthLimiterStyled } from "../../Utilities/WidthLimiter/style"

const CarHuntingHeroContainer = data => {
  console.log(data)
  const injectHTML = text => {
    return { __html: text }
  }

  return (
    <PagesHeroContainerStyled>
      <CarHuntContainer>
        <HeroContentContainer>
          <Title
            uppercase
            as="span"
            type="h1-secondary-large"
            dangerouslySetInnerHTML={injectHTML(data?.query?.data?.page_title?.html)}
          >
            {" "}
          </Title>
        </HeroContentContainer>
        <ImageryCarHuntingContainer>
          <img src={data?.query?.data?.hero_image?.url} alt="" />
        </ImageryCarHuntingContainer>
      </CarHuntContainer>
    </PagesHeroContainerStyled>
  )
}

CarHuntingHeroContainer.propTypes = {}

export default CarHuntingHeroContainer
