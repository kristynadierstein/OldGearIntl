import styled from "@emotion/styled"
import theme from "../../../utils/styles/theme"

export const TextStyled = styled.p`
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  margin-bottom: 0;
  color: ${props => (props.whiteText ? "white" : "#8c120f")};


  .menu-items {
    color: #8c120f;
  }

  ${({ type }) => {
    switch (type) {
      case "primary":
        //
        // Primary Font Style
        //
        return `
            font-size: ${theme.fonts.xxs};
            `
      case "primary-small":
        //
        // Primary Font Style
        //
        return `
              font-size: ${theme.fonts.xxxs_medium};
              `
      case "secondary":
        //
        // Secondary Font Style
        //
        return `
              font-size: ${theme.fonts.s};
              `
      case "secondary-small":
        //
        // Secondary Font Style
        //
        return `
                  font-size: ${theme.fonts.xxxs_large};
                  `
      case "tertiary":
        //
        // Tertiary Font Style
        //
        return `
                font-size: ${theme.fonts.xxs};
              `
      case "tertiary-small":
        //
        //
        //
        return `
            font-size: ${theme.fonts.xxxs_medium};
              `
      case "super-small":
        //
        //
        //
        return `
                font-size: ${theme.fonts.xxxs_small};
                  `
      case "super-big":
        //
        //
        //
        return `
                font-size: ${theme.fonts.s};
                  `
      default:
        //
        // Default Font Style
        //
        return `
                font-size: ${theme.fonts.s};
            `
    }
  }};

  @media (min-width: ${theme.breakpoints.md}) {
    ${({ type }) => {
      switch (type) {
        case "primary":
          //
          // Primary Font Style
          //
          return `
                font-size: ${theme.fonts.m};
              `
        case "primary-small":
          //
          // Primary Font Style
          //
          return `
                font-size: ${theme.fonts.xxxs_extralarge};
                `
        case "secondary":
          //
          // Secondary Font Style
          //
          return `
                font-size: ${theme.fonts.l}; 
              `
        case "secondary-small":
          //
          // Secondary Font Style
          //
          return `
                  font-size: ${theme.fonts.xxs}; 
                `
        case "tertiary":
          //
          // Tertiary Font Style
          //
          return `
                font-size: ${theme.fonts.s}; 
              `
        case "tertiary-small":
          //
          //
          //
          return `
            font-size: ${theme.fonts.xxs};
              `
        case "super-small":
          //
          //
          //
          return `
                font-size: ${theme.fonts.xxxs_medium};
                  `
        case "super-big":
          //
          //
          //
          return `
                font-size: ${theme.fonts.xxl_large};
                  `
        default:
          //
          // Default Font Style
          //
          return `
                font-size: ${theme.fonts.xl_small}; 
              `
      }
    }};
  }
`
