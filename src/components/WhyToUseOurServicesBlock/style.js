import styled from "@emotion/styled";
import { theme } from "../../styles";

export const WhyToUseOurServicesBlockStyled = styled.div`
  padding-bottom: 80px;
  padding: 40px;
  background: white;

  @media (max-width: ${theme.breakpoints.m}) {
    padding-top: 40px;
  }

  a {
    width: 100px;
    display: flex;
    margin: 0 auto;
    color: rgba(11, 31, 48, 1);
    font-style: normal;
    font-weight: 700;
    padding-top: 40px;
    position: relative;
    transition: font-weight 0.3s ease-out;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      leftt: 0;
      width: 96%;
      height: 1px;
      background-color: rgba(11, 31, 48, 1);
    }
  }

  a:hover {
    text-decoration: none;
    font-weight: 700;
  }
`;

export const CardShadowStyled = styled.div`
  background-color: rgba(227, 230, 236, 0.5);
  /* Drop Shadow_custom */

  box-shadow: -20px -28.42px 30.17px rgba(255, 255, 255, 0.375),
    -20px -31.36px 35.03px rgba(255, 255, 255, 0.4471),
    -20px -36.83px 42.67px rgba(255, 255, 255, 0.5391),
    -20px -63px 65px rgba(255, 255, 255, 0.75),
    30px 35px 45px rgba(209, 217, 230, 0.48),
    30px 28px 38px rgba(209, 217, 230, 0.4),
    30px 24px 34px rgba(209, 217, 230, 0.34),
    30px 54px 67px rgba(209, 217, 230, 0.67);
  border-radius: 24px;
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  text-align: center;
  margin: 2em;

  .Text {
    color: rgba(11, 31, 48, 1);

    strong {
      position: relative;

      &:after {
        content: "";
        width: 100%;
        background-color: #e9b548;
        position: absolute;
        left: 0;
        bottom: 3px;
        height: 12px;
        z-index: -10;
      }
    }
  }

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
    margin: .5em 0;
  }

  &:first-of-type {
    @media (max-width: ${theme.breakpoints.m}) {
        margin-top: 40px;
      }
  }
`;

export const CardHolder = styled.div`
  display: flex;
  justtify-content: space-around;
  width: 100%;
  padding-top: 80px;
  padding-bottom:80px;
  flex-direction: row;


  @media (max-width: ${theme.breakpoints.m}) {
    flex-direction: column;
    padding: 0;
  }
`;
