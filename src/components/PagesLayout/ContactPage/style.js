import styled from "@emotion/styled";
import { theme } from "../../../styles";
import { keyframes, css } from "@emotion/core";


export const ContactPage = styled.div`

.contact-footer {
    position: relative!important;
}
`

export const ContactPageContainerMain = styled.div`

max-width: 1200px;
width: 100%;
margin: 0 auto;
margin-top: 40px;
padding-right: 40px;
padding-left: 40px;
padding-top: 80px;
margin-bottom: 80px;





@media (min-width: ${theme.breakpoints.m}) {
    margin-top: 80px;
  }

`



export const HeroContactContent = styled.div`

    max-width: 400px;
    padding-right: 40px;
    text-align: justify;

    h1 {
        margin-bottom: 40px;
        padding-left: 4px;
    }

    p {
color: rgba(11,31,48,1);
    }


@media (max-width: ${theme.breakpoints.m})  {
    // width: 100%;
    // flex-direction: column;
    // margin-top:120px;
}

`

export const HeroImage = styled.div`
 width: 50%;
 max-width: 500px;

 @media (max-width: ${theme.breakpoints.m}) {
    width: 100%;
}
 

`

export const HeroContactModule = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: ${theme.breakpoints.m}) {
        flex-direction: column;
    }
`
