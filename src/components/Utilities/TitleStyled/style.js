  import styled from "@emotion/styled"
  import theme from "../../../utils/styles/theme"

  export const TitleStyled = styled.span`
    text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
    position: relative;
    margin-bottom: 0px;
    display: block;
    color: ${(props => props.whiteTitle ? "#FFF" : 'rgba(11,31,48,1)')};
    font-weight: 500;

    &.Title__displayNone {
      display: none;
    }

    &:before {
      content: '';
      color: white;
      border: ${(props => props.withTitleDecoration ? "1px solid white" : '0px')};
      width: ${(props => props.withTitleDecoration ? "20px" : '0px')};
      position: absolute;
      left: -20px;
      bottom: 5px;

      @media (max-width: ${theme.breakpoints.m}) {
        bottom: 3px;
      }
    }

    ${({ type }) => {
      switch (type) {
        case "h1":
          return `
          font-size: ${theme.fonts.xxl_small};
          `
        case "h1-secondary":
          return `
              font-size: ${theme.fonts.xs};
            `
        case "h1-secondary-large":
          return `
                font-size: ${theme.fonts.xl_small};
              `

        case "h2":
          return `
            font-size: ${theme.fonts.xs};
            `
        case "h3":
          return `
              font-size: ${theme.fonts.xl_medium};
              line-height: 1.1;
            `
        case "h4":
          return `
              font-size: ${theme.fonts.xs};
            `
        case "h5":
          return `
          font-size: ${theme.fonts.s};
          `
        case "h5-secondary":
          return `
            font-size: ${theme.fonts.s};
            `
        case "h6":
          return `
                font-size: ${theme.fonts.s};
                `
        default:
          //
          // Default Font Style
          //
          return `
              font-size: ${theme.fonts.xl_medium};
          `
      }
    }};

    @media (min-width: ${theme.breakpoints.md}) {
      ${({ type }) => {
        switch (type) {
          case "h1":
            return `
              font-size: ${theme.fonts.xxxl_large};
            `
          case "h1-secondary":
            return `
              font-size: ${theme.fonts.xxs};
            `
          case "h1-secondary-large":
            return `
                font-size: ${theme.fonts.xxxl_small};
              `

          case "h2":
            return `
              font-size: ${theme.fonts.xl}; 
            `
          case "h3":
            return `
              font-size: ${theme.fonts.xxl_large}; 
            `
          case "h4":
            return `
              font-size: ${theme.fonts.xl_small}; 
            `
          case "h5":
            return `
              font-size: ${theme.fonts.l};
              `
          case "h5-secondary":
            return `
                  font-size: ${theme.fonts.l_secondary};
                  `
          case "h6":
            return `
            font-size: ${theme.fonts.xxs};
            `
          default:
            //
            // Default Font Style
            //
            return `
              font-size: ${theme.fonts.xxl_large}; 
            `
        }
      }};
    }
  `
