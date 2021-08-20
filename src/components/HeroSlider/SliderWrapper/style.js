import styled from "@emotion/styled";
import { theme } from "../../../styles";

export const SliderWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  background: linear-gradient(
    0deg,
    rgba(11, 31, 48, 0.5) 0%,
    rgba(21, 17, 16, 0) 50%
  );
  position: relative;

  span {
    // margin-left: 60px;
  }

  span > h1 {
    margin-left: 0px;
    width: 1000px;
    color: white;
    margin-bottom: 0.1em;

    strong {
      position: relative;

      &:before {
        content: "";
        width: 100%;
        background-color: #f6262f;
        position: absolute;
        left: 0;
        bottom: 20px;
        height: 20px;
        z-index: -10;
      }
    }
  }

  // .arrow-down-hero {
  //   position: absolute;
  //   bottom: 5%;
  //   right: 50%;
  // }

  // .scroll-down-message {
  //   position: absolute;
  //   bottom: 9%;
  //   right: 48.2%;
  // }

  @media (min-width: ${theme.breakpoints.xl}) {
    .Title h1 {
      margin-left: -40px;
    }
  }

  @media (max-width: ${theme.breakpoints.l}) {
    .Title h1 {
      margin-left: 0px;
    }
  }

  @media (max-width: ${theme.breakpoints.m}) {
    .scroll-down-message {
      right: 41.5%;
    }
    .Title h1 {
      margin-left: 0px;
      max-width: 560px;
      margin-top: 40px;
      font-size: 36px !important;

      strong:before {
        height: 13px;
        bottom: 10px;
      }
    }
  }


  @media (max-width: ${theme.breakpoints.s}) {
    .Title h1 {
      margin-left: 0px;
      max-width: 300px;
      margin-top: 40px;
      font-size: 30px !important;

      strong:before {
        height: 13px;
        bottom: 10px;
      }
    }
  }



`;
