import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {
  PagesHeroContainerStyled,
  ImageryContainer,
  HeroContentContainer,
  HeroContent,
  Container,
} from "./style";
import { ScrollDownContainer } from "../../HeroSlider/style";
import SliderWrapper from "../../HeroSlider/SliderWrapper";
import { ArrowDown } from "../../Icons/ArrowDown";
import Text from "../../Utilities/TextStyled";
import Title from "../../Utilities/TitleStyled";
import { WidthLimiterStyled } from "../../Utilities/WidthLimiter/style";

const PagesHeroContainer = (data) => {
  console.log(data);
  const injectHTML = (text) => {
    return { __html: text };
  };

  return (
    <PagesHeroContainerStyled>
      {/* <WidthLimiterStyled> */}
        <Container>
          <HeroContent>
            <HeroContentContainer>
              <Title
                uppercase
                as="span"
                type="h1-secondary-large"
                dangerouslySetInnerHTML={injectHTML(data?.data?.title?.html)}
              >
                {" "}
              </Title>
            </HeroContentContainer>
            <ImageryContainer>
              <ReactPlayer
                className="react-player"
                height="100%"
                muted
                playing
                loop
                playsinline
                url="https://res.cloudinary.com/kristynadierstein/video/upload/v1630953216/OGLogistics/IMG_4755_ppv9tu.mov"
              />
            </ImageryContainer>
          </HeroContent>
        </Container>
      {/* </WidthLimiterStyled> */}
    </PagesHeroContainerStyled>
  );
};

PagesHeroContainer.propTypes = {};

export default PagesHeroContainer;
