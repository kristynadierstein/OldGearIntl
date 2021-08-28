
import styled from "@emotion/styled";
import { theme } from "../../styles";



export const ScrollDownContainer = styled.div`
position: absolute;
bottom: 0%;
right: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: translate(50%,-100%);

@media(max-width: ${theme.breakpoints.m}) {
    bottom: 5%;
}

`

export const SliderWrapperStyled = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: -1000;

`