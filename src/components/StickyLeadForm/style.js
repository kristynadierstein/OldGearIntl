import styled from "@emotion/styled";
import { theme } from "../../styles";

export const StickyLeadFormWrapper = styled.div`
  width: 300px;
  height: 100%;

  position: absolute;
  top: -50px;
  right: 20px;
`;

export const StickyContent = styled.div`
  box-shadow: 0px 30px 60px -30px rgb(0 0 0 / 30%),
    0px 50px 100px -20px rgb(50 50 93 / 25%);
  border-radius: 24px;
  background: white;
  position: -webkit-sticky;
  position: sticky;
  top: 15vh;
  left: 82%;
  z-index: 20000000000;
  width: 100%;
  height: 100%;
  max-height: 400px;
`;
