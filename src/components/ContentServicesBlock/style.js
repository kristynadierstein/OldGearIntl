import styled from "@emotion/styled";
import { theme } from "../../styles";


export const ContentServicesBlockStyled = styled.div`
max-width: 1200px;
width: 100%;
margin: 0 auto;
margin-top: 80px;

`


export const BlockContainerStyled = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 80px;
flex-direction: ${(props => props.order/2 === 0 ? "row" : "row-reverse")};


.gatsby-image-wrapper {
    box-shadow: 0px 30px 60px -30px rgba(0, 0, 0, 0.3), 0px 50px 100px -20px rgba(50, 50, 93, 0.25);
    margin-right: ${(props => props.order/2 === 0 ? "-300px" : "initial")};
    margin-left: ${(props => props.order/2 === 0 ? "initial" : "-300px")};
}
`


export const ContentBlockSmall = styled.div`
width: 600px;
min-height: 450px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid white;
padding: 20px;
border-radius: 24px;
background-color: white;
box-shadow: 0px 30px 60px -30px rgba(0, 0, 0, 0.3), 0px 50px 100px -20px rgba(50, 50, 93, 0.25);

.title-content-block {
    max-width: 400px;
    margin-bottom: 20px;
    color: rgba(11,31,48,1);
}

.Text { 
    margin-bottom: 40px;
    line-height: 1.7;
    text-transform: lowercase;
    color: rgba(11,31,48,1);
}

a {
    color: rgba(11,31,48,1);
    font-style: normal;
    font-weight: 500;
    padding-top: 40px;
    position: relative;
    transition: font-weight .3s ease;
    
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        leftt: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(11,31,48,1);
    }
}

a:hover {
    text-decoration: none;
    font-weight: 700;
}


`