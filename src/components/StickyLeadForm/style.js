import styled from "@emotion/styled";
import { theme } from "../../styles";

export const StickyLeadFormWrapper = styled.div`
  width: 300px;
  height: 100%;
  text-align: center;
  position: absolute;
  top: -50px;
  right: 20px;

  @media(max-width: ${theme.breakpoints.m}) {
    display: none;
}
`;

export const StickyContent = styled.div`
  box-shadow: 0px 30px 60px -30px rgb(0 0 0 / 30%),
    0px 50px 100px -20px rgb(50 50 93 / 25%);
  border-radius: 24px;
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  left: 82%;
  z-index: 20000000000;
  width: 100%;
  // height: 100%;
  max-height: 400px;

  .MuiAccordionSummary-root {
    min-height: 150px;
    background: #E9B548;
    border-radius: 4px;
    text-align: center;
  }

  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiAccordionSummary-content {
    flex-grow: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* for desktop */
  .whatsapp_float {
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 40px;
      right: 40px;
      background-color: #25d366;
      color: #FFF;
      border-radius: 50px;
      text-align: center;
      font-size: 30px;
      box-shadow: 2px 2px 3px #999;
      z-index: 100;
  }

  .whatsapp-icon {
      margin-top: 16px;
  }

  /* for mobile */
  @media(max-width: 767px) {
      .whatsapp-icon {
          margin-top: 10px;
      }

      .whatsapp_float {
          width: 40px;
          height: 40px;
          bottom: 20px;
          right: 10px;
          font-size: 22px;
      }
  }
`;
