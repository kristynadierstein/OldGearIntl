const theme = {
  colors: {
    primarygreen: '#043022',
    green70: 'rgba (4, 48, 34, .7)',
    green40: 'rgba (4, 48, 34, .4)',
    lightblue: '#e7f2f2',
    terracota: '#ad4700',
    orange: '#ff7300',
    yellow: '#ffc71f',
    white: '#ffffff',
    dirtywhite: 'rgba(222, 233, 233, 0.6)', 
    success: '',
    error: '',
  },
  breakpoints: {
    xxs: '320px',
    xs: '420px',
    md: '769px',
    m: '960px',
    l: '1100px',
    xl: '1201px',
    xxl: '1440px',
  },
  fontFamily: {
    primary: 'Satoshi',
  },
  fonts: {
    xxxs_small: '12px',
    xxxs_medium: '14px',
    xxxs_large: "16px",
    xxxs_extralarge: "17px",
    xxs: "18px",
    xxs_secondary: "19px",
    xs: "20px",
    s: "21px",
    m: "22px",
    l: "24px",
    l_secondary: "25px",
    xl: '28px',
    xl_small: "30px",
    xl_medium: "34px",
    xl_large: "38px",
    xxl_small: "40px",
    xxl_medium: "46px",
    xxl_large: "48px",
    xxxl_small: "75px",
    xxxl_medium: "98px",
    xxxl_large: "127px",
  },
  lineHeight: {
  xxxl_large : '64px', 
  xxxl_medium: '60px', 
  xxxl_small : '58px',
  xxl :'44px', 
  xl:'40px', 
  l:'38px', 
  m:'30px',
  s:'28px', 
  xs:'26px',
  xxs:'24px', 
  },
  headerHeight: {
    desktop: "152px", 
    mobile: "77px", 
  },
  animation: {
    primary: "0.7s ease-in-out forwards",
    secondary: "0.3s ease-in-out forwards",
    tertiary: "1s ease-in-out forwards",
  },
  transition: {
    primary: "300ms",
  },
  letterSpacing: {
    primary: '0.43px;',
  },
  heroHeight: {
    tall : 'calc(100vh - 152px)',
    tall_secondary: 'calc(90vh - 152px)',
    medium: 'calc(75vh - 152px)',
    short: '50vh', 
    mobile: {
      tall: 'calc(100vh - 77px)',
      tall_secondary: 'calc(90vh - 77px)',
      medium: 'calc(75vh - 77px)',
      short: '50vh'
    }
  },
}

export default theme

// export const GenericStyle = css`
//   h1 {
//     font-size: ${theme.fonts.heading3};
//     letter-spacing: ${theme.letterSpacing.heading3};
//     font-weight: 300;
//     font-style: normal;
//   }

//   h2 {
//     font-size: ${theme.fonts.heading4};
//     letter-spacing: ${theme.letterSpacing.heading4};
//     font-weight: 300;
//     font-style: normal;
//     text-transform: uppercase;
//   }

//   h3,
//   h4,
//   h5 {
//     font-size: ${theme.fonts.heading5};
//     letter-spacing: ${theme.letterSpacing.heading5};
//     font-weight: 400;
//     font-style: normal;
//     text-transform: uppercase;
//   }

//   ul {
//     padding-left: 20px;
//     list-style: none;
//   }

//   li {
//     margin: 15px 0;
//     position: relative;
//     font-size: ${theme.fonts.body};
//     letter-spacing: ${theme.letterSpacing.body};
//     font-weight: normal;
//     font-style: normal;
//     line-height: 1.5;

//     &::before {
//       position: absolute;
//       content: '';
//       background: ${theme.colors.secondary};
//       width: 2px;
//       height: 100%;
//       left: -20px;
//       top: 50%;
//       transform: translateY(-50%);
//     }
//   }

//   p {
//     font-size: ${theme.fonts.body};
//     letter-spacing: ${theme.letterSpacing.body};
//     font-weight: normal;
//     font-style: normal;
//     line-height: 1.5;
//   }

//   a {
//     font-weight: 500;
//     text-transform: uppercase;
//     font-size: ${theme.fonts.links};
//     color: ${theme.colors.secondary};
//     letter-spacing: 1.14px;
//     display: inline-block;
//     text-decoration: none;
//     transition: 150ms linear;
//     transition-property: color, border-color;
//     position: relative;
//     cursor: pointer;
//     margin-left: 2px;

//     &:hover {
//       color: ${theme.colors.primary};

//       &::before,
//       &::after {
//         background: ${theme.colors.primary};
//       }

//       &::after {
//         transform: scaleX(1);
//       }

//       &::before {
//         transform: scaleX(0);
//       }
//     }

//     &::before,
//     &::after {
//       content: '';
//       width: 100%;
//       height: 1px;
//       position: absolute;
//       left: 0;
//       bottom: 0;
//       transition: transform 200ms linear;
//       transform-origin: right;
//       background: ${theme.colors.secondary};
//     }

//     &::after {
//       transform: scaleX(0);
//       transition-delay: 250ms;
//       transform-origin: left;
//     }
//   }
// `

// export const GlobalStyle = props => (
//   <Global
//     {...props}
//     styles={css`
//       ${reset};

//       body {
//         margin: 0;
//         font-family: 'Azo Sans';
//         color: #202020;
//         margin-top: 84px;

//         @media (min-width: ${theme.breakpoints.s}) {
//           margin-top: 129px;
//         }

//         @media (min-width: ${theme.breakpoints.md}) {
//           margin-top: 186px;
//         }
//       }
//       html {
//         font-family: sans-serif;
//         -ms-text-size-adjust: 100%;
//         -webkit-text-size-adjust: 100%;
//       }

//       .section {
//         padding: 25px 0 10px;
//         overflow: hidden;

//         @media (min-width: ${theme.breakpoints.s}) {
//           padding: 45px 80px 0 80px;
//           max-width: 1440px;
//           margin: 0 auto;
//         }

//         .Title {
//           width: 100%;
//           text-align: center;
//           margin-bottom: 28px;

//           @media (min-width: ${theme.breakpoints.s}) {
//             margin-bottom: 45px;
//           }
//         }
//       }

//       .arrow {
//         cursor: pointer;
//         z-index: 1;
//       }

//       :root {
//         --color-swatches-gap: var(--space-xxs); // gap among swatches
//         --color-swatch-size: 32px; // swatch height and width
//         --color-swatch-radius: 50%; // swatch border radius
//       }

//       .fade-enter {
//         opacity: 0;
//       }
//       .fade-exit {
//         opacity: 1;
//       }
//       .fade-enter-active {
//         opacity: 1;
//       }
//       .fade-exit-active {
//         opacity: 0;
//       }
//       .fade-enter-active,
//       .fade-exit-active {
//         transition: opacity 300ms;
//       }

//       .CartFlyoutDrawer {
//         .MuiPaper-root {
//           max-width: 320px;
//           width: 100%;
//           padding: 90px 18px 18px;
//           position: relative;
//           margin-left: auto;
//         }

//         .MuiDrawer-paper {
//           background: ${theme.colors.tertiary};
//           overflow-y: scroll;
//         }
//       }

//       .jdgm-xx {
//         left: 0;
//       }
//       .jdgm-prev-badge[data-average-rating='0.00'] {
//         display: none !important;
//       }
//       .jdgm-author-all-initials {
//         display: none !important;
//       }
//       .jdgm-author-last-initial {
//         display: none !important;
//       }
//       .jdgm-rev__replier:before {
//         content: 'myhaircarebeauty.myshopify.com';
//       }
//       .jdgm-rev__prod-link-prefix:before {
//         content: 'about';
//       }
//       .jdgm-rev__out-of-store-text:before {
//         content: '(out of store)';
//       }

//       @media only screen and (min-width: 768px) {
//         .jdgm-rev__pics .jdgm-rev_all-rev-page-picture-separator,
//         .jdgm-rev__pics .jdgm-rev__product-picture {
//           display: none;
//         }
//       }
//       @media only screen and (max-width: 768px) {
//         .jdgm-rev__pics .jdgm-rev_all-rev-page-picture-separator,
//         .jdgm-rev__pics .jdgm-rev__product-picture {
//           display: none;
//         }
//       }

//       .jdgm-preview-badge[data-template='index'] {
//         display: none !important;
//       }
//       .jdgm-verified-count-badget[data-from-snippet='true'] {
//         display: none !important;
//       }
//       .jdgm-carousel-wrapper[data-from-snippet='true'] {
//         display: none !important;
//       }
//       .jdgm-all-reviews-text[data-from-snippet='true'] {
//         display: none !important;
//       }
//     `}
//   />
// )

// export const Img = styled(Image)`
//   max-width: 100%;
//   margin-left: 0;
//   margin-right: 0;
//   margin-top: 0;
//   padding-bottom: 0;
//   padding-left: 0;
//   padding-right: 0;
//   padding-top: 0;
//   margin-bottom: 1.45rem;
// `

// export const MainContent = styled.main`
//   margin-top: 80px;
//   margin-bottom: 40px;

//   @media (max-width: ${breakpoints.l}px) {
//     margin-top: 40px;
//     margin-bottom: 20px;
//   }
// `

// export const StyledLink = styled(LinkFormatter)`
//   padding: 6px 2px;
//   text-transform: uppercase;
//   font-weight: 500;
//   font-size: ${theme.fonts.links};
//   letter-spacing: 1.14px;
//   display: inline-block;
//   text-decoration: none;
//   transition: 150ms linear;
//   transition-property: color, border-color;
//   position: relative;

//   &::before,
//   &::after {
//     content: '';
//     width: 100%;
//     height: 1px;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     transition: transform 200ms linear;
//     transform-origin: right;
//   }

//   &::after {
//     transform: scaleX(0);
//     transition-delay: 250ms;
//     transform-origin: left;
//   }

//   &:hover {
//     &::after {
//       transform: scaleX(1);
//     }

//     &::before {
//       transform: scaleX(0);
//     }
//   }

//   &.primary {
//     color: ${theme.colors.primary};

//     &::before,
//     &::after {
//       background: ${theme.colors.primary};
//     }

//     &:hover {
//       color: ${theme.colors.secondary};

//       &::before,
//       &::after {
//         background: ${theme.colors.secondary};
//       }
//     }
//   }

//   &.secondary {
//     color: ${theme.colors.secondary};

//     &::before,
//     &::after {
//       background: ${theme.colors.secondary};
//     }

//     &:hover {
//       color: ${theme.colors.primary};

//       &::before,
//       &::after {
//         background: ${theme.colors.primary};
//       }
//     }
//   }

//   &.tertiary {
//     color: ${theme.colors.tertiary};

//     &::before,
//     &::after {
//       background: ${theme.colors.tertiary};
//     }

//     &:hover {
//       color: ${theme.colors.secondary};

//       &::before,
//       &::after {
//         background: ${theme.colors.secondary};
//       }
//     }

//     &.black {
//       color: ${theme.colors.black};

//       &::before,
//       &::after {
//         background: ${theme.colors.black};
//       }

//       &:hover {
//         color: ${theme.colors.secondary};

//         &::before,
//         &::after {
//           background: ${theme.colors.secondary};
//         }
//       }
//     }
// `

// export const OverflowContainer = styled.div`
//   overflow: hidden;
// `

// export const Container = styled.div`
//   width: 100%;
//   padding: 20px 18px 20px;
//   max-width: 1440px;
//   margin: 0 auto;

//   @media (min-width: ${theme.breakpoints.md}) {
//     padding: 25px 80px 20px;
//   }
// `

// export const TopContainer = styled.div`
//   background: ${theme.colors.tertiary};
// `

// export const SelectContainer = styled.div`
//   .MuiFormControl-root {
//     width: 100%;
//     position: relative;
//     margin-top: 10px;

//     @media (min-width: ${theme.breakpoints.s}) {
//       margin-top: 0;
//       width: 205px;
//     }

//     svg {
//       position: absolute;
//       top: 50%;
//       transform: translateY(-50%);
//       right: 4px;
//       pointer-events: none;
//       height: 100%;
//       border-left: 1px solid ${theme.colors.primary};
//       padding-left: 5px;
//       box-sizing: content-box;

//       rect {
//         fill: ${theme.colors.primary};
//       }
//     }
//   }

//   .MuiInput-formControl {
//     border: 1px solid ${theme.colors.primary};

//     &::before {
//       display: none;
//     }

//     &::after {
//       border-color: ${theme.colors.primary};
//     }

//     &.Mui-focused {
//       svg {
//         transform: translateY(-50%) rotate(180deg);
//         border-right: 1px solid ${theme.colors.primary};
//         border-left: 0px solid ${theme.colors.primary};
//         padding-left: 0;
//         padding-right: 5px;
//       }
//     }
//   }

//   .MuiNativeSelect-select {
//     padding-top: 9px;
//     padding-bottom: 10px;
//     padding-left: 10px;
//     font-size: ${theme.fonts.cta};
//     letter-spacing: ${theme.letterSpacing.cta};
//     text-transform: uppercase;
//     line-height: 1.5;
//     font-weight: 300;
//   }
// `
