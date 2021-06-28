import styled from "@emotion/styled";
import { theme } from '../../styles'

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: "Satoshi";
  max-width: 1440px;
  margin: 40px auto;
`

export const MenuItemsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-style: normal;
    font-weight: 500;
    // font-color: white;
    color: #8C120F;
  }

  a:hover{
    text-decoration: none;
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