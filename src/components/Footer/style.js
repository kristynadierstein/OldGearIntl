import styled from "@emotion/styled";
import { theme } from "../../styles";


export const StyledFooterContainer = styled.div`
height: 400px;
width: 100%;
padding: 40px;
background-color: ${theme.colors.bg};
position: absolute;
bottom: 0;
left: 0;
z-index: -8;
}


.copyright-text {
  margin-top: 40px;
  text-align: center;
}

.Title {
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.m}) {
  }
}

`

export const AddressContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const ContactContainer = styled.div`
display: flex;

a {
  color: white;
  font-weight: normal;
  font-style: normal;
}

a:hover {
  text-decoration: none;
}

`


export const SocialMediaContainer = styled.div`
display: flex;
align-items: center;


@media (min-width: ${theme.breakpoints.m}) {
  margin-top: 20px;
}

svg {
  margin: 10px;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 32px;
  }
}

`