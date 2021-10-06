import styled from "@emotion/styled";
import { theme } from "../../../styles";

export const SliderWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: relative;
  height: 70vh;
  margin-top: 10%;

  @media(max-width: ${theme.breakpoints.m}) {
    width:100%;
  }

  .Title h1{
    margin-left: 20px;
  }



  span > h1 {
    // margin-left: 0px;
    // width: 1000px;
    // margin-bottom: 0.1em;
    // font-size: .8em;

    strong {
      position: relative;

      &:before {
        content: "";
        width: 100%;
        background-color: #E9B548;
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

  // @media (min-width: ${theme.breakpoints.xl}) {
  //   .Title h1 {
  //     margin-left: -40px;
  //   }
  // }

  // @media (max-width: ${theme.breakpoints.l}) {
  //   .Title h1 {
  //     margin-left: 40px;
  //   }
  // }

  // @media (max-width: ${theme.breakpoints.m}) {
  //   width: 100%;

  //   .scroll-down-message {
  //     right: 41.5%;
  //   }
  //   .Title h1 {
  //     margin-left: 0px;
  //     max-width: 560px;
  //     margin-top: 40px;
  //     font-size: 36px !important;
  //     text-align: left!important;
  //     padding-left: 40px;
  //     padding-right:40px;

  //     strong:before {
  //       height: 13px;
  //       bottom: 10px;
  //     }
  //   }
  // }


  // @media (max-width: ${theme.breakpoints.s}) {
  //   .Title h1 {
  //     margin-left: 0px;
  //     max-width: 300px;
  //     margin-top: 40px;
  //     font-size: 30px !important;
  //     text-align: left!important;
  //     padding-left: 20px;
  //     padding-right:20px;

  //     strong:before {
  //       height: 13px;
  //       bottom: 10px;
  //     }
  //   }
  // }



`;
