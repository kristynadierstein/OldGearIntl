import styled from "@emotion/styled";
import { theme } from "../../../styles"

export const WidthLimiterStyled = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;


  @media (max-width: ${theme.breakpoints.m}) {
    padding-right: 20px;
    padding-left:  20px;
  }
`;
