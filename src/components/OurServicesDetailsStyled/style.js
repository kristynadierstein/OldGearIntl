import styled from "@emotion/styled";
import { theme } from "../../styles";
import { keyframes, css } from "@emotion/core";


export const OurServicesDetailsStyledContainer = styled.div`
background-color: white;
padding: 40px;
padding-top: 80px;
box-shadow: 4px 4px 60px rgb(150 150 150 / 20%);

h2 {
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.m}) {
    max-width: 200px;
    margin: 0px auto;
    margin-bottom: 40px;
  }
}

.subtitle-services-page {
    p {
        font-size: 1em;
        color: #0b1f30;
    }
}
`

export const ServicesContainer = styled.div`
    text-align: center;
    color: #0b1f30;
    max-width: 960px;
    margin: 60px auto;

    div {
        max-width: 700px;
        margin: 0 auto;
    }

    p {
        color: #0b1f30;
        margin-top: 1em;
    }

`