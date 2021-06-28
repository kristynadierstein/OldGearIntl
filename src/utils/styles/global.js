import { css } from "@emotion/react"
import reset from "./reset"

const globalStyle = css`
  ${reset}
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  body {
    font-family: "Satoshi";

    ::selection {
      color: "white";
    }
  }
`

export default globalStyle
