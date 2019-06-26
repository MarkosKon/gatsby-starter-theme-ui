import React from "react"
import { ThemeProvider, ColorMode } from "theme-ui"
import { Global, css } from "@emotion/core"

import theme from "./theme"

import "typeface-oswald"
import "typeface-open-sans"
import "normalize.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <ColorMode key="theme-ui-color-mode" />
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
          /*  
            This makes the flash of the dark mode seem nices.
            To use it add this class to an element.
            It doesn't work everytime for some reason.
          */
          .color-transition {
            transition: background-color 0.15s ease-in, color 0.15s ease-in;
          }
        `}
      />
      {element}
    </>
  </ThemeProvider>
)
