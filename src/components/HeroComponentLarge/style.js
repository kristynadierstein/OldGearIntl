import styled from "@emotion/styled";
import { theme } from "../../styles";

export const HeroComponentContainer = styled.div`
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


export const HeroVideoContainer = styled.div`
position: fixed;
top: 0;
right: 0;
width: 100%;
height:100vh;
display: flex;
align-items: center;

  h1 {
      padding-left: 40px;
  }

  .react-player {
    position: absolute;
    top: 0%;
    right: -30%;
    width: 100%!important;
  }

  video {
    // width: unset!important;
    // height: 300px;
    // margin-right: -40%;
    // overflow: hidden;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;

    .react-player {
      width: 100% !important;
    }
  }

`