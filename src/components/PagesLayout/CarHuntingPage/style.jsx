import styled from "@emotion/styled"
import { theme } from "../../../styles"

export const CarHuntingPage = styled.div``

export const ContactPageContainerMain = styled.div``

export const HeroContactModule = styled.div``

export const HeroContactContent = styled.div``

export const HeroImage = styled.div``

export const ImageryCarHuntingContainer = styled.div`
  position: relative;
  padding-top: unset;
  width: 50%;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
  }
`

export const CarHuntContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: unset;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 120px auto;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
    flex-direction: column;
  }
`

export const CarHuntingBoxes = styled.div`
  background-color: rgba(227, 230, 236, 0.5);
  /* Drop Shadow_custom */

  box-shadow: -20px -28.42px 30.17px rgba(255, 255, 255, 0.375), -20px -31.36px 35.03px rgba(255, 255, 255, 0.4471),
    -20px -36.83px 42.67px rgba(255, 255, 255, 0.5391), -20px -63px 65px rgba(255, 255, 255, 0.75),
    30px 35px 45px rgba(209, 217, 230, 0.48), 30px 28px 38px rgba(209, 217, 230, 0.4),
    30px 24px 34px rgba(209, 217, 230, 0.34), 30px 54px 67px rgba(209, 217, 230, 0.67);
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
    margin: 0.5em 0;
  }

  &:first-of-type {
    @media (max-width: ${theme.breakpoints.m}) {
      margin-top: 40px;
    }
  }
`

export const CarHuntingContainerContent = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;

  h2 {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  .subtitle-services-page {
    font-size: 1em;
    color: #0b1f30;
    padding-top: 0.5em;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    padding-top: 0px;
    padding-bottom:  80px;
  }
`

export const CarHuntingServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .content-carhunting-page {
    padding-top: 0.5em;
    font-size: 0.85em;
    color: #0b1f30;
  }

  h5 {
    padding-top: 0.5em;
  }

  a {
    color: #0b1f30;
  }
`

export const Content = styled.div`
  max-width: 400px;
  background-color: rgba(227, 230, 236, 0.5);
  /* Drop Shadow_custom */

  box-shadow: -20px -28.42px 30.17px rgba(255, 255, 255, 0.375), -20px -31.36px 35.03px rgba(255, 255, 255, 0.4471),
    -20px -36.83px 42.67px rgba(255, 255, 255, 0.5391), -20px -63px 65px rgba(255, 255, 255, 0.75),
    30px 35px 45px rgba(209, 217, 230, 0.48), 30px 28px 38px rgba(209, 217, 230, 0.4),
    30px 24px 34px rgba(209, 217, 230, 0.34), 30px 54px 67px rgba(209, 217, 230, 0.67);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.3em;
  text-align: center;
  margin: 2em;
`
