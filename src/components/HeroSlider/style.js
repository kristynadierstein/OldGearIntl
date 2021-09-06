
import styled from "@emotion/styled";
import { theme } from "../../styles";



export const ScrollDownContainer = styled.div`
position: absolute;
bottom: -2%;
right: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: translate(50%,-100%);
color: rgba(11,31,48,1);

@media(max-width: ${theme.breakpoints.m}) {
    bottom: 5%;
}

.scroll-down-message {
    margin-bottom: 4px;
}

`

export const SliderWrapperContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
position: fixed;
top: 0%;
// position: fixed;
// top: 20%;
// right: 0;
// z-index: -1000;

// @media(max-width: ${theme.breakpoints.m}) {
//     width: 100%;
//     top: 0;
// }

.rm-hero-slider {
    margin-top:10%;
    width:50%;
  }
`