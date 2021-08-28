import styled from "@emotion/styled";
import { theme } from "../../styles";

export const HowCanWeHelpContainerStyled = styled.div`
  background-color: rgba(11, 31, 48, 1);
  min-height: 500px;
  color: white;
  padding: 40px;
  padding-top: 80px;

  h2 {
    margin-bottom: 80px;

    @media (max-width: ${theme.breakpoints.m}) {
      max-width: 200px;
      margin: 0px auto;
      margin-bottom: 40px;
    }
  }



  .slick-slider {
    max-width: 80%;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: -100px;
  }

  .slick-dots li {
    margin: .5em;
  }

  .slick-dots li button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid white;
  }

  .slick-dots li button:before {
    font-size: 14px;
    line-height: 20px;
    width: 20px;
    height: 20px;
    color: transparent;
  }

  .slick-dots li.slick-active button:before {
    color: white !important;
    opacity: 1 !important;
    background: white;
    border-radius: 50%;
  }


  @media (min-width: ${theme.breakpoints.m}) {
    padding-bottom: 160px;
  }

`

export const ReviewContainer = styled.div`
  padding: 20px;

  .review-author {
    text-style: italic;
    margin-top: 2em;
  }
`
