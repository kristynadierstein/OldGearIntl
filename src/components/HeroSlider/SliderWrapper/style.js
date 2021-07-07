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
  background: linear-gradient(0deg, rgba(11,31,48,.5) 0%, rgba(21,17,16,0) 50%);

  h1 {
    margin-left: 60px;
    width: 1000px;
    line-height: 1.3;
    color: white;


    strong {
      position: relative;

      &:before {
        content: "";
        width: 100%;
        background-color: #F6262F;
        position: absolute;
        left: 0;
        bottom: 20px;
        height: 20px;
        z-index: -10;
      }
    }
  }
`