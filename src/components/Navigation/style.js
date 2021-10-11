import styled from "@emotion/styled";
import { theme } from "../../styles";
import { keyframes, css } from "@emotion/core";

const reveal1 = () => css`
  ${keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  `} 0.5s ease forwards;
`;

const reveal2 = () => css`
  ${keyframes`
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  `} 0.7s reverse forwards;
`;

export const NavigationWidthLimiter = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Satoshi";
  margin: 0px auto;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.5);
  position: fixed;
  top: 0;
  z-index: 1000000;
`;

export const MenuItemsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 26px;

  a {
    font-style: normal;
    font-weight: 700;
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

  .menu-items {
    color: #8c120f;
    font-weight: 900;
    letter-spacing: .05em;
    font-size: 1em;
  }
`;

export const Logo = styled.div`
  @media (max-width: ${theme.breakpoints.m}) {
    width: 80px;
    position: absolute;
    top: 13px;
    right: 30px;
    z-index: 100000;
  }

  img {
    @media (min-width: ${theme.breakpoints.m}) {
      margin: 0 80px;
    }
  }
`;
export const BurgerMenuContainer = styled.div`
  width: initial;
  height: initial;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.m}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000000000;
    width: 100%;
    background-color: white;
    height: 70px;
}

    #burger-menu {
      margin-bottom: 0;
      position: absolute;
      z-index: 100000000;
      top: 20px;
      left: 20px;
    }
  }

  svg {
    @media (max-width: ${theme.breakpoints.m}) {
      width: 38px;
      height: 28px;
    }
  }

  img {
    width: 80px;
  }
`;
