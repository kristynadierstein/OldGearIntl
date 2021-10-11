
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

.arrow-down-hero {
    width: 30px;
    height: 30px;
}

`

export const SliderWrapperContainer = styled.div`
background-image: url(https://res.cloudinary.com/kristynadierstein/image/upload/v1625006437/OGLogistics/markus-spiske-4U3Pin0XSPE-unsplash_bmqayr.jpg);
background-size: cover;
background-position: cover;
width: 100%;
height: 100%;
display: flex;
position: fixed;
top: 0%;
right:0;
// position: fixed;
// top: 20%;
// right: 0;
// z-index: -1000;

.hero-title {
    display: flex;
    align-items: center;
    padding-left: 40px;
}

.hero-title h1 {
    font-weight: 900;
    color: white;
    letter-spacing: 0.05em;
    text-shadow: 4px 4px 16px rgb(50 50 50 / 80%);

    strong {
        font-weight: 900;
    }
}

@media(max-width: ${theme.breakpoints.m}) {
 flex-direction: column;
 top: 10%;

 .hero-title {
     padding: left: 20px;
 }

 .rm-hero-slider {
     width:100%!important;
 }
}

.rm-hero-slider {
    margin-top:10%;
    width:50%;
  }
`