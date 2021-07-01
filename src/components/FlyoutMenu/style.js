
import styled from "@emotion/styled";
import { theme } from "../../styles";
import { keyframes, css } from '@emotion/core';

export const FlyoutMenuContainerStyled = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: rgba(11,31,48,1);
    position: fixed;
    top:0;
    left:0;
    z-index: 100000000;

    .flyout-escape {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    p {
        font-style: normal;
        font-weight: 400;
    }
`


export const FlyoutMenuItemsStyled = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
padding-top: 60px;

a {
    margin-top: 40px;
}

`