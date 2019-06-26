import React from "react"
import { ThemeProvider } from "theme-ui"
import { Global, css } from "@emotion/core"

import theme from "./theme"
import "typeface-oswald"
import "typeface-open-sans"
import "normalize.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Oswald", sans-serif;
          }
          body {
            font-family: "Open Sans", sans-serif;
            font-size: 20px;
            line-height: 1.4;
          }
        `}
      />
      {element}
    </>
  </ThemeProvider>
)
