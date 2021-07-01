import styled from "@emotion/styled";
import { theme } from "../../styles";
import { keyframes, css } from '@emotion/core';


const reveal1 = () => css`
  ${keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  `} 0.5s ease forwards;
`

const reveal2 = () => css`
  ${keyframes`
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  `} 0.7s reverse forwards;
`

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Satoshi";
  margin: 40px auto;
  margin-top: 0px;
  position: fixed;
  top: 0;
  z-index: 1000000;
  background-color: rgba(250, 250, 250, .5);
`

export const MenuItemsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 26px;


  a {
    font-style: normal;
    font-weight: 400;
    color: white;
    position: relative;

    ::before {
      content: "";
      width: 0%;
      height: 1px;
      background-color: ${theme.colors.primary};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  a:hover {
    text-decoration: none;

  }

  a:hover::before {
    animation: ${reveal1};
    transform-origin: right;
  }
`

export const Logo = styled.div`
  img {
    margin: 0 80px;
  }
`
export const BurgerMenuContainer = styled.div`
  width: initial;
  height: initial;
  cursor: pointer;
  margin: 20px;

  @media (max-width: ${theme.breakpoints.m}) {
    width: 38px;
    height: 28px;
    position: relative;
  }

  svg {
    @media (max-width: ${theme.breakpoints.m}) {
      width: 38px;
      height: 28px;
    }
  }
`
