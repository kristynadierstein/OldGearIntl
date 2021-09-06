import styled from "@emotion/styled";
import { theme } from "../../../styles";
import { keyframes, css } from "@emotion/core";

export const PagesHeroContainerStyled = styled.div`
width: 100%;
background: white;
height: 70vh;
position: fixed;
top: 0;



`

export const MainWrapperShort = styled.div`
width: 100%;
height: 100%;
position: relative;
top: 70vh;
z-index: 1;
background-color: white;
padding-bottom: 400px;



`

export const Container = styled.div`
width: 100%;
position: relative;
top: 0%;


`

export const ImageryContainer = styled.div`
position: relative;
padding-top: 56.25%;
width: 50%;

.react-player {
    position: absolute;
    top: 0%;
    left: 0;
    // min-height: 500px;
    // width: unset;
}

video {
    // width: unset!important;
    // height: 300px;
    // margin-right: -40%;
    // overflow: hidden;
}

@media (max-width: ${theme.breakpoints.m})  {
    width: 100%;

    .react-player {
      width: 100%!important;
  }
}


`

export const HeroContentContainer = styled.div`
width: 50%;

@media (max-width: ${theme.breakpoints.m})  {
    width: 100%;
}

.Title h1{
    margin-left: 20px;
  }



  span > h1 {
    // margin-left: 0px;

    // margin-bottom: 0.1em;
    // font-size: .8em;

    strong {
      position: relative;
      width: 400px;
      z-index: 0;

      &:before {
        content: "";
        width: 400px;
        background-color: #f6262f;
        position: absolute;
        left: -250px;
        bottom: 20px;
        height: 20px;
        z-index: -1;
      }
    }
  }


`

export const HeroContent = styled.div`
position: absolute;
padding-top: -50%%;
top: 15%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;

@media (max-width: ${theme.breakpoints.m})  {
    width: 100%;
    flex-direction: column;
    margin-top:120px;
}
`