import styled from "@emotion/styled";
import { theme } from "../../styles";

export const GalleryCarouselContainerStyled = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  min-height: 500px;
  padding: 40px;
  padding-top: 80px;
  padding-bottom: 140px;


  .slick-slider {
    margin-top: 80px;
  }

  .slick-dots {
    bottom: -70px;
  }

  .slick-dots li {
    margin: 0.5em;
  }

  .slick-dots li button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #0b1f30;
  }

  .slick-dots li button:before {
    font-size: 14px;
    line-height: 20px;
    width: 20px;
    height: 20px;
    color: transparent;
  }

  .slick-dots li.slick-active button:before {
    color: #0b1f30 !important;
    opacity: 1 !important;
    background: #0b1f30 !important;
    border-radius: 50%;
  }
`;

export const ImageHorizontalContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 8px;

  .car-description-carousel {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #0b1f30;
    width: 100%;
    height: 50px;
    opacity: 60%;
    color: white;
    padding: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  img {
    object-fit: cover;
  }

  &:nth-of-type(odd) {
    margin-bottom: 0px;
  }
`;

export const ImageVerticalContainer = styled.div`
  width: 50%;
  height: 300px;
  margin: 8px;

  img {
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
    height: auto;
    margin-right: 8px;
    margin-leftt: 8px;
  }

  &:nth-of-type(even) {
      margin-right: 0;
  }
  &:nth-of-type(odd) {
      margin-left: 0;
  }
`;

export const PhotoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const PhotoContainerSecond = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
    flex-direction: column;
    margin-top: 8px;
  }
`;

export const SliderContainer = styled.div`
  display: flex !important;
  width: 100%;

  @media (max-width: ${theme.breakpoints.m}) {
    flex-direction: column;
  }
`;

export const SecondaryRowSlider = styled.div`
  display: flex;
  width: 100%;
`;
