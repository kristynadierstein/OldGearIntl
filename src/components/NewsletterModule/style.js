import styled from "@emotion/styled";
import { theme } from "../../styles";

export const NewsletterModuleStyled = styled.div`
 background-color: #E9B548;
 width: 100%;
 min-height: 500px;
 padding: 40px;
 padding-top: 80px;
 padding-bottom: 140px;
 taext-align: center;

 h2 {
     margin: 0 auto;
     text-align: center;
 }

 img {
     width: 200px;
     margin-top: 40px;
 }

`

export const NewsletterContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 .MuiInputBase-input {
    border: 0!important;
    color: rgba(11,31,48,1)!important;
    border-bottom: 2px solid rgba(11,31,48,1)!important;
    margin-bottom: 20px;
 }

 .MuiInput-underline:before {
     display: none!important;
 }

 button { 
     border: none;
     background: transparent;
     color: rgba(11,31,48,1);
     font-weight: 700;
     text-decoration: underline;
 }

`